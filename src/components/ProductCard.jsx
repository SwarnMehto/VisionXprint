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
    <div className="vx-product-card">
      <div className="vx-product-image-wrap">
        {productBadge && <span className="vx-product-badge">{productBadge}</span>}
        <img src={productImage} alt={productName} className="vx-product-image" />
      </div>

      <div className="vx-product-content">
        <p className="vx-product-category">{categoryText}</p>
        <h3 className="vx-product-title">{productName}</h3>
        <p className="vx-product-desc">{productDescription}</p>

        <div className="vx-product-footer">
          <div>
            <p className="vx-product-price-label">From</p>
            <h4 className="vx-product-price">{formatCurrency(productPrice)}</h4>
          </div>

          <Link to={`/product/${productSlug}`} className="btn btn-primary">
            Customize
          </Link>
        </div>
      </div>
    </div>
  );
}