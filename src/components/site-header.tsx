import Link from "next/link";
import { company, navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-main">
        <Link href="/" className="brand" aria-label="Electroart home">
          <span className="brand-mark">EA</span>
          <span className="brand-copy">
            <strong>Electroart</strong>
            <small>Precision Manufacturing</small>
          </span>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a href={`tel:${company.phoneRaw}`} className="phone-chip">
            {company.phoneDisplay}
          </a>
          <Link href="/enquiry" className="btn btn-sm">
            Get Free Enquiry
          </Link>
        </div>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
          </div>
        </details>
      </div>
    </header>
  );
}
