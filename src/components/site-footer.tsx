import Link from "next/link";
import { company, intro } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section className="footer-block">
          <h3>Electroart</h3>
          <p>{intro}</p>
          <Link href="/about" className="btn btn-soft btn-sm">
            Company Story
          </Link>
        </section>

        <section className="footer-block">
          <h3>Contact</h3>
          <p>{company.address}</p>
          <p>
            <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </section>

        <section className="footer-block map-block">
          <h3>Factory Location</h3>
          <iframe
            src={company.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Electroart map"
          />
        </section>
      </div>

      <div className="container footer-bottom">
        <p>Copyright 2022 Electroart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
