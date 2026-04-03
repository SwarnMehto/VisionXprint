import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="vx-hero">
      <div className="container">
        <div className="vx-offer-strip">
          <span>Premium custom printing in yellow, white and sky blue theme</span>
          <Link to="/bulk-order">Request bulk quote</Link>
        </div>

        <div className="vx-hero-grid">
          <div className="vx-hero-banner vx-hero-banner-large">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              alt="Business card printing"
            />

            <div className="vx-hero-card">
              <p className="vx-hero-eyebrow">Business Identity</p>
              <h2>Premium visiting cards with a bright modern look</h2>
              <p>
                Clean, attractive and premium business cards for founders,
                agencies and customer-facing teams.
              </p>
              <div className="vx-hero-actions">
                <Link to="/category/visiting-cards" className="btn btn-primary">
                  Shop now
                </Link>
                <Link to="/products" className="btn btn-outline">
                  View all
                </Link>
              </div>
            </div>
          </div>

          <div className="vx-hero-side">
            <div className="vx-hero-banner vx-hero-banner-small">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Team branding"
              />

              <div className="vx-hero-card vx-hero-card-small">
                <p className="vx-hero-eyebrow">Team Branding</p>
                <h3>ID cards and lanyards</h3>
                <p>Smart branding products for offices, schools and events.</p>

                <div className="vx-chip-row">
                  <span className="vx-chip">ID Cards</span>
                  <span className="vx-chip">Lanyards</span>
                </div>
              </div>
            </div>

            <div className="vx-hero-banner vx-hero-banner-small">
              <img
                src="https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=1200&q=80"
                alt="Custom mugs and gifts"
              />

              <div className="vx-hero-card vx-hero-card-small">
                <p className="vx-hero-eyebrow">Gifting</p>
                <h3>Mugs, acrylic keychains and gifts</h3>
                <p>Vibrant merchandise for campaigns, clients and events.</p>

                <div className="vx-chip-row">
                  <span className="vx-chip">Mugs</span>
                  <span className="vx-chip">Keychains</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vx-trust-row">
          <div className="vx-trust-item">
            <strong>Bright Premium Theme</strong>
            <span>Fresh yellow, white and sky blue styling</span>
          </div>
          <div className="vx-trust-item">
            <strong>Bulk Order Support</strong>
            <span>Fast response for large custom runs</span>
          </div>
          <div className="vx-trust-item">
            <strong>Artwork Upload</strong>
            <span>Easy flow for logos and print-ready files</span>
          </div>
          <div className="vx-trust-item">
            <strong>Business Ready</strong>
            <span>Built for teams, events and gifting</span>
          </div>
        </div>
      </div>
    </section>
  );
}