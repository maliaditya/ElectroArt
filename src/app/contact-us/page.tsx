import Link from "next/link";
import { company } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="container page-intro">
        <p className="kicker">Contact</p>
        <h1>Speak With Electroart</h1>
        <p>Share your requirement and get a direct response for suitable product options.</p>
      </section>

      <section className="container section-gap contact-layout">
        <article className="contact-card">
          <h3>Factory Address</h3>
          <p>{company.address}</p>
        </article>

        <article className="contact-card">
          <h3>Call</h3>
          <p>
            <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
          </p>
        </article>

        <article className="contact-card">
          <h3>Email</h3>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <Link href="/enquiry" className="btn btn-sm">
            Open Enquiry Form
          </Link>
        </article>
      </section>

      <section className="container section-gap map-panel">
        <iframe
          src={company.mapEmbed}
          title="Electroart map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
