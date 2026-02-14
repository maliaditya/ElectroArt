import { galleryImages } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <section className="container page-intro">
        <p className="kicker">Visual Library</p>
        <h1>Gallery</h1>
        <p>Curated image collection from Electroart product lines and delivered manufacturing outputs.</p>
      </section>

      <section className="container section-gap">
        <div className="mosaic-grid">
          {galleryImages.map((image, index) => {
            const tileClass = index % 9 === 0 ? "tile-large" : index % 5 === 0 ? "tile-wide" : "";
            return (
              <a
                key={`${image}-${index}`}
                className={`mosaic-tile ${tileClass}`.trim()}
                href={encodeURI(image)}
                target="_blank"
                rel="noreferrer"
              >
                <img src={encodeURI(image)} alt={`Gallery image ${index + 1}`} />
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
