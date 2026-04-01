import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({ product }) {
  if (!product) return null;

  const categoryText = product.category
    ? product.category.replace(/-/g, " ")
    : "custom print";

  const productName = product.name || "Product";
  const productDescription = product.description || "Custom printed product";
  const productImage =
    product.image || "https://via.placeholder.com/600x400?text=Product";
  const productPrice = product.price ?? 0;
  const productSlug = product.slug || "";

  return (
    <div
      className="card"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "26px",
      }}
    >
      <img
        src={productImage}
        alt={productName}
        style={{
          width: "100%",
          height: "240px",
          objectFit: "cover",
          borderRadius: "18px",
          marginBottom: "18px",
          background: "#f3f4f6",
        }}
      />

      <p
        style={{
          color: "#6b7280",
          fontWeight: "600",
          marginBottom: "8px",
          textTransform: "capitalize",
          fontSize: "14px",
        }}
      >
        {categoryText}
      </p>

      <h3
        style={{
          margin: "0 0 10px",
          fontSize: "22px",
          color: "#111827",
        }}
      >
        {productName}
      </h3>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "16px",
          lineHeight: "1.7",
          flexGrow: 1,
        }}
      >
        {productDescription}
      </p>

      <p
        style={{
          fontWeight: "700",
          marginBottom: "16px",
          color: "#111827",
          fontSize: "18px",
        }}
      >
        From {formatCurrency(productPrice)}
      </p>

      <Link to={`/product/${productSlug}`} className="btn btn-primary">
        Customize product
      </Link>
    </div>
  );
}