"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ImageModalGalleryProps = {
  images: string[];
  altLabel: string;
  layout?: "media" | "mosaic";
};

type LensState = {
  active: boolean;
  stageX: number;
  stageY: number;
  bgPosX: number;
  bgPosY: number;
  bgSize: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;
const LENS_SIZE = 170;
const MAGNIFIER_FACTOR = 2;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ImageModalGallery({ images, altLabel, layout = "media" }: ImageModalGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [lens, setLens] = useState<LensState>({
    active: false,
    stageX: 0,
    stageY: 0,
    bgPosX: 0,
    bgPosY: 0,
    bgSize: "200% 200%",
  });
  const [isMounted, setIsMounted] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const encodedImages = useMemo(() => images.map((image) => encodeURI(image)), [images]);
  const activeImage = activeIndex === null ? null : encodedImages[activeIndex];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeModal = () => setActiveIndex(null);
  const openModal = (index: number) => setActiveIndex(index);

  const nextImage = () => {
    setActiveIndex((index) => {
      if (index === null) return 0;
      return (index + 1) % encodedImages.length;
    });
  };

  const prevImage = () => {
    setActiveIndex((index) => {
      if (index === null) return 0;
      return (index - 1 + encodedImages.length) % encodedImages.length;
    });
  };

  const zoomIn = () => setZoom((value) => clamp(value + ZOOM_STEP, MIN_ZOOM, MAX_ZOOM));
  const zoomOut = () => setZoom((value) => clamp(value - ZOOM_STEP, MIN_ZOOM, MAX_ZOOM));
  const resetZoom = () => setZoom(MIN_ZOOM);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-" || event.key === "_") zoomOut();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, encodedImages.length]);

  useEffect(() => {
    if (activeIndex === null) {
      setLens({
        active: false,
        stageX: 0,
        stageY: 0,
        bgPosX: 0,
        bgPosY: 0,
        bgSize: "200% 200%",
      });
      setZoom(MIN_ZOOM);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null) {
      setLens((value) => ({ ...value, active: false }));
    }
  }, [activeIndex, zoom]);

  const handleStageMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (zoom > MIN_ZOOM) {
      setLens((value) => ({ ...value, active: false }));
      return;
    }

    const stageRect = stageRef.current?.getBoundingClientRect();
    const imageRect = imageRef.current?.getBoundingClientRect();
    if (!stageRect || !imageRect) return;

    const withinImage =
      event.clientX >= imageRect.left &&
      event.clientX <= imageRect.right &&
      event.clientY >= imageRect.top &&
      event.clientY <= imageRect.bottom;

    if (!withinImage) {
      setLens((value) => ({ ...value, active: false }));
      return;
    }

    const stageX = clamp(event.clientX - stageRect.left, 0, stageRect.width);
    const stageY = clamp(event.clientY - stageRect.top, 0, stageRect.height);
    const imageX = clamp(event.clientX - imageRect.left, 0, imageRect.width);
    const imageY = clamp(event.clientY - imageRect.top, 0, imageRect.height);

    const lensZoom = Math.max(zoom * MAGNIFIER_FACTOR, MAGNIFIER_FACTOR);
    const bgWidth = imageRect.width * lensZoom;
    const bgHeight = imageRect.height * lensZoom;
    const bgPosX = -(imageX * lensZoom - LENS_SIZE / 2);
    const bgPosY = -(imageY * lensZoom - LENS_SIZE / 2);

    setLens({
      active: true,
      stageX,
      stageY,
      bgPosX,
      bgPosY,
      bgSize: `${bgWidth}px ${bgHeight}px`,
    });
  };

  const handleStageWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.deltaY < 0) zoomIn();
    if (event.deltaY > 0) zoomOut();
  };

  return (
    <>
      <div className={layout === "mosaic" ? "mosaic-grid" : "media-grid"}>
        {encodedImages.map((image, index) => {
          const tileClass = layout === "mosaic" ? (index % 9 === 0 ? "tile-large" : index % 5 === 0 ? "tile-wide" : "") : "";
          const className = layout === "mosaic" ? `mosaic-tile image-tile-button ${tileClass}` : "image-tile-button media-tile-button";

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              className={className.trim()}
              onClick={() => openModal(index)}
              aria-label={`Open image ${index + 1} for ${altLabel}`}
            >
              <img src={image} alt={`${altLabel} image ${index + 1}`} loading="lazy" />
            </button>
          );
        })}
      </div>

      {isMounted && activeImage
        ? createPortal(
            <div className="image-modal" role="dialog" aria-modal="true" aria-label={`${altLabel} image viewer`} onClick={closeModal}>
              <div className="image-modal-panel" onClick={(event) => event.stopPropagation()}>
                <div className="image-modal-toolbar">
                  <p>
                    {activeIndex === null ? 1 : activeIndex + 1} / {encodedImages.length}
                  </p>
                  <div className="image-modal-actions">
                    <button type="button" onClick={prevImage}>
                      Prev
                    </button>
                    <button type="button" onClick={nextImage}>
                      Next
                    </button>
                    <button type="button" onClick={zoomOut}>
                      -
                    </button>
                    <button type="button" onClick={resetZoom}>
                      Reset
                    </button>
                    <button type="button" onClick={zoomIn}>
                      +
                    </button>
                    <button type="button" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>

                <div
                  ref={stageRef}
                  className="image-modal-stage"
                  onMouseMove={handleStageMouseMove}
                  onMouseLeave={() => setLens((value) => ({ ...value, active: false }))}
                  onWheel={handleStageWheel}
                >
                  <img
                    ref={imageRef}
                    src={activeImage}
                    alt={`${altLabel} image ${activeIndex === null ? 1 : activeIndex + 1}`}
                    className="image-modal-main"
                    style={{ transform: `scale(${zoom})` }}
                  />

                  {zoom === MIN_ZOOM && lens.active ? (
                    <span
                      className="image-magnifier"
                      style={{
                        left: `${lens.stageX - LENS_SIZE / 2}px`,
                        top: `${lens.stageY - LENS_SIZE / 2}px`,
                        backgroundImage: `url(${activeImage})`,
                        backgroundPosition: `${lens.bgPosX}px ${lens.bgPosY}px`,
                        backgroundSize: lens.bgSize,
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
