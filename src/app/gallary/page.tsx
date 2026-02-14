import { ImageModalGallery } from "@/components/image-modal-gallery";
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
        <ImageModalGallery images={galleryImages} altLabel="Gallery" layout="mosaic" />
      </section>
    </main>
  );
}
