import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import ReviewSection from "../components/ReviewSection";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import FeatureHighlights from "../components/FeatureHighlights";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import BulkOrderCTASection from "../components/BulkOrderCTASection";
import categories from "../data/categories";
import testimonials from "../data/testimonials";

export default function Home() {
  const safeCategories = Array.isArray(categories) ? categories : [];
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  return (
    <>
      <Navbar />
      <HeroSection />

      <section className="vx-home-categories-section">
        <div className="container">
          <div className="vx-section-head">
            <div>
              <p className="vx-section-tag">Shop by category</p>
              <h2 className="vx-home-title">Explore print categories built for real branding</h2>
              <p className="vx-home-subtitle">
                Browse premium custom print products designed for offices,
                schools, events, startups, gifting and business identity.
              </p>
            </div>

            <Link to="/products" className="vx-section-link">
              Browse all categories
            </Link>
          </div>

          <div className="explore-row">
            {safeCategories.filter(Boolean).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <FeatureHighlights />
      <FeaturedProductsSection />
      <WhyChooseUsSection />

      <section className="vx-home-brand-strip-section">
        <div className="container">
          <div className="vx-home-brand-strip">
            <div className="vx-brand-strip-left">
              <p className="vx-section-tag">Made for modern businesses</p>
              <h2>Simple ordering. Premium look. Better brand impression.</h2>
              <p>
                Vision X Print is built for businesses that want clean design,
                strong presentation and a smooth custom printing experience.
              </p>
            </div>

            <div className="vx-brand-strip-points">
              <div className="vx-brand-point">
                <strong>Premium storefront feel</strong>
                <span>Bright, modern and conversion-focused UI</span>
              </div>
              <div className="vx-brand-point">
                <strong>Custom print friendly</strong>
                <span>Designed for branding, merchandise and gifting</span>
              </div>
              <div className="vx-brand-point">
                <strong>Business-ready categories</strong>
                <span>Products made for practical everyday use</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BulkOrderCTASection />
      <ReviewSection testimonials={safeTestimonials} />
      <FAQSection />
      <Footer />
    </>
  );
}