import { company } from "@/lib/site-data";

export default function EnquiryPage() {
  return (
    <main className="page-shell">
      <section className="container page-intro">
        <p className="kicker">Enquiry</p>
        <h1>Share Your Requirement</h1>
        <p>Same enquiry flow and backend integration as the existing website, redesigned for better usability.</p>
      </section>

      <section className="container section-gap enquiry-layout">
        <aside className="enquiry-info">
          <h3>What Happens Next?</h3>
          <ol>
            <li>Your request is sent to the same existing enquiry endpoint.</li>
            <li>The Electroart team reviews product and quantity requirements.</li>
            <li>You receive a response for next-step discussion.</li>
          </ol>
          <p>
            Direct contact: <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </aside>

        <form
          className="enquiry-form"
          method="post"
          action="https://www.weblinkservices.net/career/inquiry/emailsend.php"
          encType="multipart/form-data"
        >
          <input name="sales_person" type="hidden" value="Vaibhav Sir" />
          <input
            name="company_name"
            type="hidden"
            value="Electroart : Medical Enclosure Manufacturing Solutions Services"
          />
          <input name="company_domain" type="hidden" value="electroart.co.in/" />
          <input name="company_email" type="hidden" value="arjun.borole@electroart.co.in" />
          <input name="sales_person_email" type="hidden" value="vaibhav@weblinkservices.net" />

          <div className="form-grid">
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Company Name
              <input name="cname" type="text" required />
            </label>
            <label>
              Phone Number
              <input name="mobile_no" type="number" required />
            </label>
            <label>
              Email
              <input name="email_id" type="email" required />
            </label>
            <label>
              Product Name
              <input name="cproduct" type="text" required />
            </label>
            <label>
              City
              <input name="city" type="text" required />
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>

          <label>
            Attach File
            <input type="file" name="file" />
          </label>

          <button type="submit" className="btn">
            Submit Enquiry
          </button>
        </form>
      </section>
    </main>
  );
}
