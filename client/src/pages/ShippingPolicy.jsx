import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PolicyPages.css";

export default function ShippingPolicy() {
  return (
    <>
      <Navbar />

      <section className="policy-page">
        <div className="policy-container">
          <div className="policy-hero">
            <p className="policy-label">Vision X Print</p>
            <h1>Shipping Policy</h1>
            <p>
              This Shipping Policy explains how Vision X Print processes,
              dispatches, and delivers orders.
            </p>
          </div>

          <div className="policy-card">
            <div className="policy-section">
              <h2>1. Order Processing Time</h2>
              <p>
                Standard orders are usually processed within 1 to 3 business
                days. Custom or bulk printing orders may require additional
                production time depending on quantity and complexity.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. Shipping Time</h2>
              <p>
                Delivery timelines vary by location. Most domestic shipments are
                delivered within 3 to 7 business days after dispatch. Remote
                locations may take longer.
              </p>
            </div>

            <div className="policy-section">
              <h2>3. Shipping Charges</h2>
              <p>
                Shipping charges, if applicable, will be shown during checkout
                or shared at the time of order confirmation.
              </p>
            </div>

            <div className="policy-section">
              <h2>4. Tracking</h2>
              <p>
                Once your order is shipped, tracking details may be shared with
                you through email, phone, WhatsApp, or your account dashboard,
                depending on availability.
              </p>
            </div>

            <div className="policy-section">
              <h2>5. Delays</h2>
              <p>
                Delivery delays may occur due to courier issues, weather,
                holidays, operational issues, or incorrect shipping details
                provided by the customer.
              </p>
            </div>

            <div className="policy-section">
              <h2>6. Incorrect Address</h2>
              <p>
                Customers are responsible for providing correct delivery
                information. Vision X Print will not be responsible for failed
                deliveries caused by wrong or incomplete addresses.
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Damaged Package</h2>
              <p>
                If your package arrives visibly damaged, please report it as
                soon as possible with proper photos and order details so we can
                review the issue.
              </p>
            </div>

            <div className="policy-section">
              <h2>8. Contact</h2>
              <p>
                For shipping-related queries, please reach out to us through our
                contact page or customer support channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}