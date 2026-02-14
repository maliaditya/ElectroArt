import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageModalGallery } from "@/components/image-modal-gallery";
import { VideoModalGallery } from "@/components/video-modal-gallery";
import { downloads, intro, products } from "@/lib/site-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const uvManual = slug === "uv-meter" ? downloads[0] : null;

  return (
    <main className="page-shell">
      <section className="container section-gap detail-hero">
        <div className="detail-image-wrap">
          <img src={encodeURI(product.images[0])} alt={product.title} />
        </div>

        <div className="detail-copy-wrap">
          <p className="kicker">{product.category === "machines" ? "Machine Product" : "Medical Product"}</p>
          <h1>{product.title}</h1>
          <p>{intro}</p>

          <div className="detail-metrics">
            <article>
              <strong>{product.images.length}</strong>
              <span>Image references</span>
            </article>
            <article>
              <strong>{product.videos?.length || 0}</strong>
              <span>Video demos</span>
            </article>
            <article>
              <strong>{product.highlights?.length || 0}</strong>
              <span>Highlights</span>
            </article>
          </div>

          <div className="hero-actions">
            <Link href="/enquiry" className="btn">
              Request Enquiry
            </Link>
            <Link href="/product" className="btn btn-soft">
              Back To Explorer
            </Link>
          </div>

          {uvManual ? (
            <a href={encodeURI(uvManual.href)} target="_blank" rel="noreferrer" className="manual-link">
              Download: {uvManual.title}
            </a>
          ) : null}
        </div>
      </section>

      {product.highlights && product.highlights.length > 0 ? (
        <section className="container section-gap detail-panel">
          <h2>Highlights</h2>
          <ul>
            {product.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="container section-gap detail-panel">
        <h2>Media Gallery</h2>
        <ImageModalGallery images={product.images} altLabel={product.title} />
      </section>

      {product.videos && product.videos.length > 0 ? (
        <section className="container section-gap detail-panel">
          <h2>Product Videos</h2>
          <VideoModalGallery videos={product.videos} productTitle={product.title} />
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="container section-gap detail-panel">
          <h2>Related Products</h2>
          <div className="related-links">
            {related.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`}>
                <img src={encodeURI(item.images[0])} alt={item.title} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
