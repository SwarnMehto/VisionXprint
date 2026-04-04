import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function FeaturedProductsSection() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="vx-home-section">
      <div className="container">
        <div className="vx-section-head">
          <div>
            <p className="vx-section-tag">Featured products</p>
            <h2>Top custom print products for modern brands</h2>
            <p>
              Explore our most popular print solutions for business identity,
              office branding, gifting and promotional use.
            </p>
          </div>

          <Link to="/products" className="vx-section-link">
            View all products
          </Link>
        </div>

        <div className="grid grid-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}