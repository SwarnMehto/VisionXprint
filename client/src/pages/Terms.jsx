import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PolicyPages.css";

export default function Terms() {
  return (
    <>
      <Navbar />

      <section className="policy-page">
        <div className="policy-container">
          <div className="policy-hero">
            <p className="policy-label">Vision X Print</p>
            <h1>Terms & Conditions</h1>
            <p>
              Please read these terms carefully before using our website or
              placing an order with Vision X Print.
            </p>
          </div>

          <div className="policy-card">
            <div className="policy-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to be bound by
                these Terms & Conditions. If you do not agree, please do not use
                our services.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. Services</h2>
              <p>
                Vision X Print provides custom printing and related design/order
                services. All services are subject to availability and
                confirmation.
              </p>
            </div>

            <div className="policy-section">
              <h2>3. User Responsibility</h2>
              <p>You agree to provide accurate information while placing orders and using the website. You are responsible for uploaded content, designs, text, and images submitted by you.</p>
            </div>

            <div className="policy-section">
              <h2>4. Intellectual Property</h2>
              <p>
                All website content including branding, text, graphics, layout,
                and design elements belongs to Vision X Print unless otherwise
                stated. Users must not copy or reuse site content without
                permission.
              </p>
            </div>

            <div className="policy-section">
              <h2>5. Custom Design Orders</h2>
              <p>
                For customized products, users must carefully review the design,
                spelling, size, and details before final approval. Vision X
                Print will not be responsible for errors approved by the
                customer.
              </p>
            </div>

            <div className="policy-section">
              <h2>6. Pricing and Payments</h2>
              <p>
                All prices displayed on the website are subject to change
                without prior notice. Orders will only be processed after
                successful payment or confirmation as applicable.
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Order Cancellation</h2>
              <p>
                Once production has started for custom products, cancellation
                may not be possible. Cancellation requests will be reviewed on a
                case-by-case basis.
              </p>
            </div>

            <div className="policy-section">
              <h2>8. Limitation of Liability</h2>
              <p>
                Vision X Print will not be liable for any indirect, incidental,
                or consequential damages arising from the use of our website or
                services.
              </p>
            </div>

            <div className="policy-section">
              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any
                time. Updated terms will be posted on this page.
              </p>
            </div>

            <div className="policy-section">
              <h2>10. Contact</h2>
              <p>
                For any questions related to these terms, please contact us
                through our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}