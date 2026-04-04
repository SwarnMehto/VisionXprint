import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PolicyPages.css";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />

      <section className="policy-page">
        <div className="policy-container">
          <div className="policy-hero">
            <p className="policy-label">Vision X Print</p>
            <h1>Refund Policy</h1>
            <p>
              This Refund Policy outlines when refunds, replacements, or issue
              reviews may apply for orders placed with Vision X Print.
            </p>
          </div>

          <div className="policy-card">
            <div className="policy-section">
              <h2>1. Custom Products</h2>
              <p>
                Since most products are customized or made-to-order, refunds are
                generally not applicable once the order has been approved and
                sent for production.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. Eligible Cases</h2>
              <p>A refund or replacement may be considered in cases such as:</p>
              <ul>
                <li>Wrong product delivered</li>
                <li>Damaged product received</li>
                <li>Printing defect caused by our production team</li>
                <li>Missing items in the delivered package</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. Non-Eligible Cases</h2>
              <p>Refunds or replacements may not be provided for:</p>
              <ul>
                <li>Customer-approved design errors</li>
                <li>Minor color variation due to screen and print difference</li>
                <li>Delay caused by courier or incorrect address details</li>
                <li>Change of mind after production has started</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4. Reporting an Issue</h2>
              <p>
                Any issue must be reported within 48 hours of delivery along
                with order details, product photos, and a clear description of
                the problem.
              </p>
            </div>

            <div className="policy-section">
              <h2>5. Review Process</h2>
              <p>
                Each complaint will be reviewed by our team. Based on the case,
                we may offer a replacement, store credit, partial refund, or
                full refund if applicable.
              </p>
            </div>

            <div className="policy-section">
              <h2>6. Refund Timeline</h2>
              <p>
                If a refund is approved, it may take 5 to 10 business days to
                reflect in the original payment method, depending on the payment
                provider or bank.
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Contact</h2>
              <p>
                For refund or replacement requests, please contact our support
                team with complete order details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}