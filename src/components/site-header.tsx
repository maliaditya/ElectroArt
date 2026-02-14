"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { company, navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    if (mobileNavRef.current?.open) {
      mobileNavRef.current.open = false;
    }
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => closeMobileMenu();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <details className="mobile-nav" ref={mobileNavRef}>
          <summary>Menu</summary>
          <div className="mobile-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            ))}
            <a href={`tel:${company.phoneRaw}`} onClick={closeMobileMenu}>
              {company.phoneDisplay}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
