import { downloads } from "@/lib/site-data";

export default function DownloadPage() {
  return (
    <main className="page-shell">
      <section className="container page-intro">
        <p className="kicker">Resources</p>
        <h1>Downloads</h1>
        <p>Reference files and product manuals.</p>
      </section>

      <section className="container section-gap">
        <div className="download-board">
          {downloads.map((item) => (
            <a key={item.href} href={encodeURI(item.href)} target="_blank" rel="noreferrer" className="download-item">
              <img src="/img/product/uv-meter/pdf.png" alt="PDF icon" />
              <div>
                <h3>{item.title}</h3>
                <p>Open file</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
