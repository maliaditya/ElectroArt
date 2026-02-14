import Link from "next/link";
import { ProductExplorer } from "@/components/product-explorer";
import { products } from "@/lib/site-data";

export default function ProductPage() {
  const machineCount = products.filter((item) => item.category === "machines").length;
  const medicalCount = products.filter((item) => item.category === "medical").length;

  return (
    <main className="page-shell">
      <section className="container page-intro">
        <p className="kicker">Catalogue</p>
        <h1>Product Explorer</h1>
        <p>
          This is a structured explorer interface for all Electroart products. Use filters and search to shortlist the
          exact product set before opening details.
        </p>
        <div className="badge-row">
          <span>{machineCount} Machine products</span>
          <span>{medicalCount} Medical products</span>
          <Link href="/enquiry">Need help selecting? Enquire now</Link>
        </div>
      </section>

      <section className="container section-gap">
        <ProductExplorer
          products={products}
          title="All Products"
          description="Switch between grid and list view based on how your team compares products."
        />
      </section>
    </main>
  );
}
