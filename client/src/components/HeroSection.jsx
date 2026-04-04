import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="vx-hero">
      <div className="container">
        <div className="vx-hero-strip">
          <div className="vx-hero-strip-left">
            <span>Premium custom printing in yellow, white and sky blue theme</span>
          </div>

          <div className="vx-hero-strip-right">
            <Link to="/bulk-order">Request bulk quote</Link>
          </div>
        </div>

        <div className="vx-hero-images-row">
          <div className="vx-hero-image-box">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              alt="Business card printing"
            />
          </div>

          <div className="vx-hero-image-box">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Team branding"
            />
          </div>

          <div className="vx-hero-image-box">
            <img
              src="https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=1200&q=80"
              alt="Custom mugs and gifts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}