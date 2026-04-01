import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  if (!category) return null;

  const categoryName = category.name || "Category";
  const categorySlug = category.slug || "";
  const categoryImage =
    category.image || "https://via.placeholder.com/300x300?text=Category";

  return (
    <Link
      to={`/category/${categorySlug}`}
      className="explore-item"
      style={{ display: "block" }}
    >
      <div className="explore-circle">
        <img src={categoryImage} alt={categoryName} />
      </div>
      <p>{categoryName}</p>
    </Link>
  );
}