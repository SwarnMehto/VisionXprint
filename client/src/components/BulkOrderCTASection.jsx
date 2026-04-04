import { Link } from "react-router-dom";

export default function BulkOrderCTASection() {
  return (
    <section className="vx-bulk-cta-section">
      <div className="container">
        <div className="vx-bulk-cta-box">
          <div className="vx-bulk-cta-content">
            <p className="vx-section-tag light">Bulk orders</p>
            <h2>Need custom printing for your office, school, team or event?</h2>
            <p>
              Get fast support for large quantity orders, branding requirements,
              custom sizes and multi-product print packages.
            </p>
          </div>

          <div className="vx-bulk-cta-actions">
            <Link to="/bulk-order" className="vx-bulk-btn-primary">
              Request Bulk Quote
            </Link>
            <Link to="/contact" className="vx-bulk-btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}