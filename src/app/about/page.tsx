import Link from "next/link";
import { intro } from "@/lib/site-data";

function PillarIcon({ type }: { type: "mission" | "vision" | "values" }) {
  if (type === "mission") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
      </svg>
    );
  }

  if (type === "vision") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
        <circle cx="12" cy="12" r="2.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="container page-intro">
        <p className="kicker">Company</p>
        <h1>About Electroart</h1>
        <p>
          IR & UV dryers, IR-UV combo dryers, trolleys, and precision fabricated products for medical and industrial
          teams.
        </p>
      </section>

      <section className="container section-gap story-grid">
        <img src="/img/about-us.jpg" alt="About Electroart" />
        <article>
          <h2>What We Build</h2>
          <p>{intro}</p>
          <Link href="/product" className="btn btn-sm">
            Browse Products
          </Link>
        </article>
      </section>

      <section className="container section-gap value-grid">
        <article className="value-card">
          <div className="value-card-head">
            <span className="value-icon">
              <PillarIcon type="mission" />
            </span>
            <div className="value-title-wrap">
              <h3>Mission</h3>
              <p className="value-sub">What drives us</p>
            </div>
          </div>
          <p className="value-copy">
            To serve clients globally with better products through innovation and optimum manufacturing processes at
            reasonable costs.
          </p>
        </article>
        <article className="value-card">
          <div className="value-card-head">
            <span className="value-icon">
              <PillarIcon type="vision" />
            </span>
            <div className="value-title-wrap">
              <h3>Vision</h3>
              <p className="value-sub">Where we are headed</p>
            </div>
          </div>
          <p className="value-copy">
            To create local opportunity, growth, and impact in every community and country around the globe.
          </p>
        </article>
        <article className="value-card">
          <div className="value-card-head">
            <span className="value-icon">
              <PillarIcon type="values" />
            </span>
            <div className="value-title-wrap">
              <h3>Values</h3>
              <p className="value-sub">How we operate</p>
            </div>
          </div>
          <ul className="value-points">
            <li>Innovation</li>
            <li>Diversity & inclusion</li>
            <li>Corporate social responsibility</li>
            <li>Philanthropy</li>
            <li>Environment</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
