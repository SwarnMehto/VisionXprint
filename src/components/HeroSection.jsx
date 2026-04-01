import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero-grid">
          <div className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Business print products"
            />
            <div className="hero-overlay-card">
              <h2>Business Cards That Make the Right First Impression</h2>
              <p>
                Create clean, premium-looking business cards for founders, teams,
                agencies and corporate brands.
              </p>
              <Link to="/category/visiting-cards" className="btn btn-primary">
                Shop Business Cards
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Branded merchandise"
            />
            <div className="hero-overlay-card">
              <h2>Custom Branded Merchandise for Teams & Events</h2>
              <p>
                Launch premium printed lanyards, custom ID cards, acrylic keychains
                and mugs with a professional global look.
              </p>

              <div className="hero-chip-row" style={{ marginBottom: "16px" }}>
                <span className="hero-chip">Lanyards</span>
                <span className="hero-chip">ID Cards</span>
                <span className="hero-chip">Mugs</span>
              </div>

              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}