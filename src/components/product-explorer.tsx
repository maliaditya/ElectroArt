"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/site-data";

type ProductExplorerProps = {
  products: Product[];
  title: string;
  description: string;
  maxItems?: number;
  ctaHref?: string;
  ctaLabel?: string;
};

type Filter = "all" | "machines" | "medical";

type ViewMode = "grid" | "list";

function getSnippet(product: Product) {
  if (product.highlights?.length) return product.highlights[0];
  if (product.videos?.length) return `${product.videos.length} demo video${product.videos.length > 1 ? "s" : ""} available`;
  return "Precision-focused fabrication and industrial-grade manufacturing.";
}

export function ProductExplorer({ products, title, description, maxItems, ctaHref, ctaLabel }: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<ViewMode>("grid");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesFilter = filter === "all" ? true : product.category === filter;
      if (!matchesFilter) return false;
      if (!q) return true;

      const searchable = `${product.title} ${(product.highlights || []).join(" ")}`.toLowerCase();
      return searchable.includes(q);
    });
  }, [filter, products, query]);

  const visible = maxItems ? filtered.slice(0, maxItems) : filtered;

  return (
    <section className="explorer-shell">
      <div className="explorer-head">
        <div>
          <p className="kicker">Smart Navigation</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="view-switch" role="tablist" aria-label="view mode">
          <button type="button" className={view === "grid" ? "active" : ""} onClick={() => setView("grid")}>
            Grid
          </button>
          <button type="button" className={view === "list" ? "active" : ""} onClick={() => setView("list")}>
            List
          </button>
        </div>
      </div>

      <div className="explorer-controls">
        <label className="search-box">
          <span>Search Products</span>
          <input
            type="search"
            placeholder="Type dryer, trolley, enclosure..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="filter-tabs" role="tablist" aria-label="product category filter">
          <button type="button" className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          <button
            type="button"
            className={filter === "machines" ? "active" : ""}
            onClick={() => setFilter("machines")}
          >
            Machines
          </button>
          <button
            type="button"
            className={filter === "medical" ? "active" : ""}
            onClick={() => setFilter("medical")}
          >
            Medical
          </button>
        </div>
      </div>

      <div className="results-meta">
        <p>
          Showing <strong>{visible.length}</strong> of <strong>{filtered.length}</strong> matching products
        </p>
        {ctaHref && ctaLabel ? (
          <Link href={ctaHref} className="text-link">
            {ctaLabel}
          </Link>
        ) : null}
      </div>

      {visible.length === 0 ? (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try changing search terms or switching category filters.</p>
        </div>
      ) : (
        <div className={`product-grid ${view === "list" ? "is-list" : ""}`}>
          {visible.map((product) => (
            <article key={product.slug} className="product-tile">
              <a href={`/${product.slug}`} className="tile-media" aria-label={product.title}>
                <img src={encodeURI(product.images[0])} alt={product.title} />
              </a>

              <div className="tile-body">
                <div className="tile-meta">
                  <span>{product.category === "machines" ? "Machine Product" : "Medical Product"}</span>
                  <span>{product.images.length} image{product.images.length > 1 ? "s" : ""}</span>
                </div>

                <h3>{product.title}</h3>
                <p>{getSnippet(product)}</p>

                <div className="tile-actions">
                  <Link href={`/${product.slug}`} className="btn btn-sm">
                    Open Details
                  </Link>
                  <Link href="/enquiry" className="btn btn-soft btn-sm">
                    Enquiry
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
