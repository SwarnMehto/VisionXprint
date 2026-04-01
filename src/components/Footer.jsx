import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container section">
        <div className="grid grid-4">
          <div>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
              Vision X Print
            </h3>
            <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
              Premium custom print products for business identity, branding,
              events and promotional merchandise.
            </p>
          </div>

          <div>
            <h4 style={{ marginTop: 0, marginBottom: "14px" }}>Shop</h4>
            <div style={{ display: "grid", gap: "10px" }}>
              <Link to="/products">All Products</Link>
              <Link to="/category/id-cards">ID Cards</Link>
              <Link to="/category/lanyards">Lanyards</Link>
              <Link to="/category/acrylic-keychains">Acrylic Keychains</Link>
            </div>
          </div>

          <div>
            <h4 style={{ marginTop: 0, marginBottom: "14px" }}>Company</h4>
            <div style={{ display: "grid", gap: "10px" }}>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/bulk-order">Bulk Orders</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div>
            <h4 style={{ marginTop: 0, marginBottom: "14px" }}>Policies</h4>
            <div style={{ display: "grid", gap: "10px" }}>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/shipping-policy">Shipping Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Vision X Print. Designed for premium custom print commerce.
        </div>
      </div>
    </footer>
  );
}