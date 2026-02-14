import Link from "next/link";
import { ProductExplorer } from "@/components/product-explorer";
import { products, whyChooseUs } from "@/lib/site-data";

export default function Home() {
  const machineCount = products.filter((item) => item.category === "machines").length;
  const medicalCount = products.filter((item) => item.category === "medical").length;

  return (
    <main className="page-shell">
      <section className="container hero-block">
        <div className="hero-copy">
          <p className="kicker">Electroart Engineering</p>
          <h1>Build Better Medical And Industrial Equipment With A Faster Product Workflow</h1>
          <p>
            From IR and UV drying systems to trolleys, enclosures, and critical machine parts, Electroart helps teams
            source production-ready products with practical lead times.
          </p>

          <div className="hero-actions">
            <Link href="/product" className="btn">
              Start Product Search
            </Link>
            <Link href="/enquiry" className="btn btn-soft">
              Request Quotation
            </Link>
          </div>

          <div className="hero-stats">
            <article>
              <strong>27+</strong>
              <span>Years of setup</span>
            </article>
            <article>
              <strong>{products.length}</strong>
              <span>Active products</span>
            </article>
            <article>
              <strong>2</strong>
              <span>Solution tracks</span>
            </article>
          </div>
        </div>

        <div className="hero-visual hero-radar">
          <div className="hero-radar-head">
            <p>Quick Navigation</p>
            <span>Choose a product family</span>
          </div>

          <div className="hero-radar-grid">
            <Link href="/ir-dryer" className="radar-card">
              <img src="/img/product/ir-dryer/3.jpg" alt="IR Dryer" />
              <div className="radar-copy">
                <strong>IR Dryer</strong>
                <small>Thermal drying line</small>
              </div>
            </Link>

            <Link href="/enclosures" className="radar-card">
              <img src="/img/product/enclosure/1.JPG" alt="Enclosures" />
              <div className="radar-copy">
                <strong>Enclosures</strong>
                <small>Cabinets and housings</small>
              </div>
            </Link>

            <Link href="/trolleys" className="radar-card">
              <img src="/img/product/trolleys/13.JPG" alt="Trolleys" />
              <div className="radar-copy">
                <strong>Trolleys</strong>
                <small>Medical movement systems</small>
              </div>
            </Link>

            <Link href="/medical-grade-compressor-for-ventilator" className="radar-card">
              <img src="/img/product/compressor/compressor-for-vantilator.jpg" alt="Compressor" />
              <div className="radar-copy">
                <strong>Compressor</strong>
                <small>Ventilator-compatible unit</small>
              </div>
            </Link>
          </div>

          <div className="hero-radar-actions">
            <Link href="/product" className="radar-link">
              Open Full Catalogue
            </Link>
            <Link href="/download" className="radar-link">
              Download Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="container section-gap tracks-grid">
        <article>
          <p className="kicker">Track A</p>
          <h3>Machines & Fabrication</h3>
          <p>Dryers, UV meters, machine parts, enclosures, and production-focused components.</p>
          <strong>{machineCount} products</strong>
        </article>
        <article>
          <p className="kicker">Track B</p>
          <h3>Medical Equipment Range</h3>
          <p>Trolleys, covers, carbon products, and medical equipment-ready accessories.</p>
          <strong>{medicalCount} products</strong>
        </article>
      </section>

      <section className="container section-gap">
        <ProductExplorer
          products={products}
          title="Find The Right Product In Seconds"
          description="Use search and filters to quickly locate the exact product family, then jump directly to details and enquiry."
          maxItems={8}
          ctaHref="/product"
          ctaLabel="Open full catalogue"
        />
      </section>

      <section className="container section-gap process-board">
        <div>
          <p className="kicker">How Teams Use Electroart</p>
          <h2>Simple, Clear Product Journey</h2>
          <p>Designed for teams that need decisions quickly without digging through endless galleries.</p>
        </div>
        <ol>
          <li>
            <strong>Discover</strong>
            <span>Search products by use case with filters.</span>
          </li>
          <li>
            <strong>Evaluate</strong>
            <span>Open detailed pages with full media and videos.</span>
          </li>
          <li>
            <strong>Discuss</strong>
            <span>Use enquiry form with same workflow fields as existing site.</span>
          </li>
          <li>
            <strong>Deliver</strong>
            <span>Move to procurement with practical production support.</span>
          </li>
        </ol>
      </section>

      <section className="container section-gap trust-panel">
        <div>
          <p className="kicker">Why Electroart</p>
          <h2>Performance First, Practical Cost</h2>
          <ul>
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <img src="/img/why-choose-us.jpg" alt="Why choose Electroart" />
      </section>
    </main>
  );
}
