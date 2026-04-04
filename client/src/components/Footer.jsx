import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <div className="footer-logo">VX</div>
              <div>
                <h3 className="footer-brand-title">Vision X Print</h3>
                <p className="footer-brand-tagline">
                  Premium Custom Printing Solutions
                </p>
              </div>
            </div>

            <p className="footer-description">
              Premium custom print products for business identity, branded
              merchandise, events, promotions, and gifting. Build your brand
              with high-quality print solutions that look professional and feel
              premium.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Shop</h4>
              <div className="footer-links">
                <Link to="/products">All Products</Link>
                <Link to="/category/id-cards">ID Cards</Link>
                <Link to="/category/lanyards">Lanyards</Link>
                <Link to="/category/acrylic-keychains">Acrylic Keychains</Link>
              </div>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <div className="footer-links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/bulk-order">Bulk Orders</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </div>

            <div className="footer-col">
              <h4>Policies</h4>
              <div className="footer-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/shipping-policy">Shipping Policy</Link>
                <Link to="/refund-policy">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 Vision X Print. All rights reserved.</p>
          <p>Designed to make custom printing simple, premium, and professional.</p>
        </div>
      </div>
    </footer>
  );
}