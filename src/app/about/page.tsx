import Link from "next/link";
import { intro } from "@/lib/site-data";

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
        <article>
          <h3>Mission</h3>
          <p>
            To serve clients globally with better products through innovation and optimum manufacturing processes at
            reasonable costs.
          </p>
        </article>
        <article>
          <h3>Vision</h3>
          <p>To create local opportunity, growth, and impact in every community and country around the globe.</p>
        </article>
        <article>
          <h3>Values</h3>
          <ul>
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
