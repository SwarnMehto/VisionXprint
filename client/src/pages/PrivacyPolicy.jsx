import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PolicyPages.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="policy-page">
        <div className="policy-container">
          <div className="policy-hero">
            <p className="policy-label">Vision X Print</p>
            <h1>Privacy Policy</h1>
            <p>
              Your privacy matters to us. This policy explains how Vision X
              Print collects, uses, and protects your personal information.
            </p>
          </div>

          <div className="policy-card">
            <div className="policy-section">
              <h2>1. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email
                address, phone number, billing address, shipping address, and
                order details when you use our website or place an order.
              </p>
            </div>

            <div className="policy-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Process and manage your orders</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send important order updates</li>
                <li>Maintain account and transaction records</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. Payment Information</h2>
              <p>
                We do not store your full payment details on our servers. Online
                payments are processed through secure third-party payment
                gateways.
              </p>
            </div>

            <div className="policy-section">
              <h2>4. Sharing of Information</h2>
              <p>
                We do not sell or rent your personal data. Your information may
                only be shared with trusted service providers such as delivery
                partners or payment processors when necessary to complete your
                order.
              </p>
            </div>

            <div className="policy-section">
              <h2>5. Cookies and Website Usage</h2>
              <p>
                Our website may use cookies and similar technologies to improve
                user experience, remember preferences, and analyze website
                performance.
              </p>
            </div>

            <div className="policy-section">
              <h2>6. Data Security</h2>
              <p>
                We take reasonable steps to protect your personal information.
                However, no online platform can guarantee complete security, so
                users should also take care while sharing sensitive information
                online.
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Your Rights</h2>
              <p>
                You may request correction or update of your personal
                information by contacting us directly. We will make reasonable
                efforts to respond promptly.
              </p>
            </div>

            <div className="policy-section">
              <h2>8. Policy Updates</h2>
              <p>
                Vision X Print may update this Privacy Policy from time to time.
                Updated versions will be posted on this page.
              </p>
            </div>

            <div className="policy-section">
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, you can
                contact us through our website contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}