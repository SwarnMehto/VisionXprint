import { useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { calculatePrice } from "../utils/priceCalculator";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.slug === slug);

  const [size, setSize] = useState(product?.sizes?.[0] || "");
  const [material, setMaterial] = useState(product?.materials?.[0] || "");
  const [printSide, setPrintSide] = useState(product?.printSides?.[0] || "");
  const [quantity, setQuantity] = useState(product?.quantities?.[0] || 1);
  const [fileName, setFileName] = useState("");

  const totalPrice = useMemo(() => {
    if (!product) return 0;
    return calculatePrice(product.price, Number(quantity));
  }, [product, quantity]);

  if (!product) {
    return (
      <>
        <Navbar />
        <section className="page-content">
          <div className="container">
            <div className="card" style={{ borderRadius: "28px" }}>
              <h2>Product not found</h2>
              <p style={{ color: "#6b7280" }}>
                The product you are looking for does not exist.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("visionx_cart")) || [];

    const existingIndex = cart.findIndex(
      (item) =>
        item.slug === product.slug &&
        item.size === size &&
        item.material === material &&
        item.printSide === printSide
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += Number(quantity);
      cart[existingIndex].totalPrice += totalPrice;
    } else {
      cart.push({
        id: Date.now(),
        slug: product.slug,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: Number(quantity),
        size,
        material,
        printSide,
        fileName,
        totalPrice,
      });
    }

    localStorage.setItem("visionx_cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <section className="page-content" style={{ paddingTop: "36px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.95fr",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div className="card" style={{ borderRadius: "28px", padding: "18px" }}>
              <div
                style={{
                  background: "#f9fafb",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #ececec",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "560px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div
              className="card"
              style={{
                borderRadius: "28px",
                padding: "28px",
                position: "sticky",
                top: "120px",
              }}
            >
              <p
                style={{
                  margin: "0 0 10px",
                  color: "#6b7280",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
              >
                {product.category.replace(/-/g, " ")}
              </p>

              <h1
                style={{
                  margin: "0 0 12px",
                  fontSize: "42px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                }}
              >
                {product.name}
              </h1>

              <p
                style={{
                  margin: "0 0 18px",
                  color: "#6b7280",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                {product.description}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "22px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "800",
                    color: "#111827",
                  }}
                >
                  {formatCurrency(product.price)}
                </span>

                <span
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    padding: "8px 14px",
                    background: "#f9fafb",
                    borderRadius: "999px",
                    border: "1px solid #ececec",
                  }}
                >
                  Premium customization available
                </span>
              </div>

              <div className="form-group">
                <label>Size</label>
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  {product.sizes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Material</label>
                <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                  {product.materials.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Print Side</label>
                <select value={printSide} onChange={(e) => setPrintSide(e.target.value)}>
                  {product.printSides.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                  {product.quantities.map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Upload Artwork</label>
                <div
                  style={{
                    border: "1px dashed #cbd5e1",
                    borderRadius: "20px",
                    padding: "20px",
                    background: "#f9fafb",
                  }}
                >
                  <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
                  <p
                    style={{
                      margin: "12px 0 0",
                      color: "#6b7280",
                      fontSize: "14px",
                    }}
                  >
                    Upload logo, ready design or artwork file.
                  </p>
                  {fileName && (
                    <p
                      style={{
                        margin: "10px 0 0",
                        color: "#111827",
                        fontWeight: "600",
                      }}
                    >
                      Selected file: {fileName}
                    </p>
                  )}
                </div>
              </div>

              <div
                style={{
                  background: "#111827",
                  color: "#ffffff",
                  borderRadius: "24px",
                  padding: "22px",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#d1d5db",
                    fontSize: "14px",
                  }}
                >
                  Estimated total
                </p>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "34px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {formatCurrency(totalPrice)}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "22px",
                  flexWrap: "wrap",
                }}
              >
                <button onClick={handleAddToCart} className="btn btn-primary">
                  Add to cart
                </button>

                <Link to="/cart" className="btn btn-outline">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section" style={{ background: "#f9fafb" }}>
          <div className="container">
            <h2 className="section-title">Related products</h2>
            <p className="section-subtitle">
              More products from the same category you may also want to customize.
            </p>

            <div className="grid grid-3">
              {relatedProducts.map((item) => (
                <div key={item.id} className="card" style={{ borderRadius: "26px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "18px",
                      marginBottom: "16px",
                    }}
                  />
                  <h3 style={{ margin: "0 0 10px" }}>{item.name}</h3>
                  <p style={{ color: "#6b7280", lineHeight: "1.7", marginBottom: "14px" }}>
                    {item.description}
                  </p>
                  <Link to={`/product/${item.slug}`} className="btn btn-primary">
                    View product
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}