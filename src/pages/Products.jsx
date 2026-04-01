import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((item) => item.category))];
    return ["all", ...uniqueCategories];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Custom print products</h1>
          <p>
            Discover premium custom products for brand presentation, business
            identity, team merchandise and corporate print needs.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div
            className="card"
            style={{
              marginBottom: "28px",
              borderRadius: "28px",
              padding: "26px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div>
                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "28px",
                    color: "#111827",
                  }}
                >
                  Find the right product faster
                </h2>
                <p
                  style={{
                    margin: 0,
                    color: "#6b7280",
                    lineHeight: "1.8",
                  }}
                >
                  Search by product name or browse by category to explore the
                  most suitable print options for your business.
                </p>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: "100%",
                    height: "54px",
                    borderRadius: "999px",
                    border: "1px solid #d1d5db",
                    padding: "0 18px",
                    fontSize: "15px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "24px",
              }}
            >
              {categories.map((category) => {
                const label =
                  category === "all"
                    ? "All Products"
                    : category.replace(/-/g, " ");

                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    style={{
                      padding: "12px 18px",
                      borderRadius: "999px",
                      border: isActive ? "1px solid #111827" : "1px solid #d1d5db",
                      background: isActive ? "#111827" : "#ffffff",
                      color: isActive ? "#ffffff" : "#111827",
                      cursor: "pointer",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

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
                textAlign: "center",
                padding: "50px 20px",
                borderRadius: "28px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>No products found</h3>
              <p style={{ color: "#6b7280" }}>
                Try a different search term or choose another category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}