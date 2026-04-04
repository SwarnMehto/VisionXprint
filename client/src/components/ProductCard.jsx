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
  const productBadge = product.badge || "";

  return (
    <article className="vx-product-card">
      <div className="vx-product-image-wrap">
        {productBadge && <span className="vx-product-badge">{productBadge}</span>}

        <Link
          to={`/product/${productSlug}`}
          className="vx-product-image-link"
          aria-label={`View ${productName}`}
        >
          <img
            src={productImage}
            alt={productName}
            className="vx-product-image"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="vx-product-content">
        <div className="vx-product-meta">
          <p className="vx-product-category">{categoryText}</p>
          <h3 className="vx-product-title">
            <Link to={`/product/${productSlug}`} className="vx-product-title-link">
              {productName}
            </Link>
          </h3>
        </div>

        <p className="vx-product-desc">{productDescription}</p>

        <div className="vx-product-bottom">
          <div className="vx-product-pricing">
            <p className="vx-product-price-label">Starting from</p>
            <h4 className="vx-product-price">{formatCurrency(productPrice)}</h4>
          </div>

          <Link to={`/product/${productSlug}`} className="vx-product-btn">
            Customize Now
            <span className="vx-product-btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}