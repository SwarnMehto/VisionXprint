import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function CategoryPage() {
  const { slug } = useParams();

  const filteredProducts = products.filter((product) => product.category === slug);

  const formattedTitle = slug.replace(/-/g, " ");

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1 style={{ textTransform: "capitalize" }}>{formattedTitle}</h1>
          <p>
            Explore premium custom {formattedTitle} designed for modern business
            branding and polished presentation.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div
              className="card"
              style={{
                borderRadius: "28px",
                textAlign: "center",
                padding: "50px 20px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>No products found</h3>
              <p style={{ color: "#6b7280" }}>
                There are no products available in this category right now.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}