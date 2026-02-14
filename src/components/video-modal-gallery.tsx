"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type VideoModalGalleryProps = {
  videos: string[];
  productTitle: string;
};

type VideoItem = {
  source: string;
  embed: string;
  thumbnail: string | null;
};

function parseYouTubeId(urlValue: string) {
  try {
    const url = new URL(urlValue);
    const host = url.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0] ?? null;
    }

    const watchId = url.searchParams.get("v");
    if (watchId) return watchId;

    const segments = url.pathname.split("/").filter(Boolean);
    const embedIndex = segments.indexOf("embed");
    if (embedIndex >= 0 && segments[embedIndex + 1]) {
      return segments[embedIndex + 1];
    }

    const shortsIndex = segments.indexOf("shorts");
    if (shortsIndex >= 0 && segments[shortsIndex + 1]) {
      return segments[shortsIndex + 1];
    }
  } catch {
    const embedMatch = urlValue.match(/embed\/([A-Za-z0-9_-]{6,})/);
    if (embedMatch) return embedMatch[1];

    const watchMatch = urlValue.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
    if (watchMatch) return watchMatch[1];
  }

  return null;
}

function buildEmbedUrl(urlValue: string) {
  const videoId = parseYouTubeId(urlValue);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : urlValue;
}

function buildAutoplayUrl(embedUrl: string) {
  try {
    const url = new URL(embedUrl);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("rel", "0");
    url.searchParams.set("modestbranding", "1");
    return url.toString();
  } catch {
    return embedUrl;
  }
}

export function VideoModalGallery({ videos, productTitle }: VideoModalGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const items = useMemo<VideoItem[]>(
    () =>
      videos.map((source) => {
        const id = parseYouTubeId(source);
        return {
          source,
          embed: buildEmbedUrl(source),
          thumbnail: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null,
        };
      }),
    [videos]
  );

  const activeItem = activeIndex === null ? null : items[activeIndex];
  const activeVideoNumber = activeIndex === null ? 1 : activeIndex + 1;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="video-grid">
        {items.map((video, index) => (
          <button
            key={`${video.source}-${index}`}
            type="button"
            className="video-launch"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open video ${index + 1} for ${productTitle}`}
          >
            <span className="video-thumb">
              {video.thumbnail ? <img src={video.thumbnail} alt="" loading="lazy" /> : null}
              <span className="video-play-badge">Play</span>
            </span>
            <span className="video-launch-meta">
              <strong>Video {index + 1}</strong>
              <small>Tap to open modal view</small>
            </span>
          </button>
        ))}
      </div>

      {isMounted && activeItem
        ? createPortal(
            <div
              className="video-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${productTitle} video viewer`}
              onClick={() => setActiveIndex(null)}
            >
              <div className="video-modal-panel" onClick={(event) => event.stopPropagation()}>
                <button type="button" className="video-modal-close" onClick={() => setActiveIndex(null)}>
                  Close
                </button>
                <div className="video-modal-frame">
                  <iframe
                    src={buildAutoplayUrl(activeItem.embed)}
                    title={`${productTitle} video ${activeVideoNumber}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
