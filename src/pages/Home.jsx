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
import { Link } from "react-router-dom";

export default function Home() {
  const safeCategories = Array.isArray(categories) ? categories : [];
  const safeProducts = Array.isArray(products) ? products : [];
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  return (
    <>
      <Navbar />
      <HeroSection />

      <section className="section" style={{ paddingTop: "50px" }}>
        <div className="container">
          <h2 className="section-title">Explore all categories</h2>
          <p className="section-subtitle">
            Browse premium print products built for brand identity, team culture
            and polished business presentation.
          </p>

          <div className="explore-row">
            {safeCategories
              .filter((category) => category)
              .map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
          </div>
        </div>
      </section>

      <FeatureHighlights />

      <section className="section" style={{ background: "#f9fafb" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2 className="section-title">Featured products</h2>
              <p className="section-subtitle">
                Clean, premium custom products for businesses, events and
                customer-facing brands.
              </p>
            </div>

            <Link to="/products" className="btn btn-outline">
              View all products
            </Link>
          </div>

          <div className="grid grid-3">
            {safeProducts
              .filter((product) => product)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              padding: "34px",
              borderRadius: "28px",
              display: "grid",
              gridTemplateColumns: "1.2fr 0.9fr",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 className="section-title" style={{ marginBottom: "12px" }}>
                Need large-scale branded printing?
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "22px" }}>
                Request a custom quote for corporate gifting, team kits, event
                merchandise, employee onboarding packs and premium promotional
                print runs.
              </p>

              <Link to="/bulk-order" className="btn btn-primary">
                Request bulk quote
              </Link>
            </div>

            <div
              style={{
                background: "#111827",
                color: "#ffffff",
                padding: "28px",
                borderRadius: "24px",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
                Best for
              </h3>
              <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "2" }}>
                <li>Corporate onboarding kits</li>
                <li>Schools and institutions</li>
                <li>Agencies and startups</li>
                <li>Trade shows and conferences</li>
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