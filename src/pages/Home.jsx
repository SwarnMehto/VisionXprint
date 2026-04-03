import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import ReviewSection from "../components/ReviewSection";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import FeatureHighlights from "../components/FeatureHighlights";
import categories from "../data/categories";
import products from "../data/products";
import testimonials from "../data/testimonials";

export default function Home() {
  const safeCategories = Array.isArray(categories) ? categories : [];
  const safeProducts = Array.isArray(products) ? products : [];
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  return (
    <>
      <Navbar />
      <HeroSection />

      <section className="section" style={{ paddingTop: "42px" }}>
        <div className="container">
          <div className="vx-section-head">
            <div>
              <h2 className="section-title">Explore all categories</h2>
              <p className="section-subtitle">
                Browse premium print products built for business identity,
                branded merchandise and polished presentation.
              </p>
            </div>

            <div className="vx-slider-arrows">
              <button type="button" className="vx-arrow-btn">←</button>
              <button type="button" className="vx-arrow-btn">→</button>
            </div>
          </div>

          <div className="explore-row">
            {safeCategories.filter(Boolean).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <FeatureHighlights />

      <section className="section" style={{ background: "#f8fdff" }}>
        <div className="container">
          <div className="vx-section-head">
            <div>
              <h2 className="section-title">Featured products</h2>
              <p className="section-subtitle">
                Best-selling custom products for bright business branding and premium presentation.
              </p>
            </div>

            <Link to="/products" className="btn btn-outline">
              View all products
            </Link>
          </div>

          <div className="grid grid-3">
            {safeProducts.filter(Boolean).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="vx-dual-promo">
            <div className="vx-promo-box vx-promo-box-dark">
              <p className="vx-promo-label">For teams & organizations</p>
              <h3>Need large-scale custom printing?</h3>
              <p>
                Get custom quotes for onboarding kits, events, staff branding,
                conferences, gifting and business merchandise.
              </p>
              <Link to="/bulk-order" className="btn btn-primary">
                Request bulk quote
              </Link>
            </div>

            <div className="vx-promo-box">
              <p className="vx-promo-label">Why brands choose us</p>
              <h3>Bright, clean and premium storefront</h3>
              <ul className="vx-list">
                <li>Yellow, white and sky blue visual theme</li>
                <li>Business-focused product categories</li>
                <li>Smooth custom ordering experience</li>
                <li>Better presentation for global clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewSection testimonials={safeTestimonials} />
      <FAQSection />
      <Footer />
    </>
  );
}