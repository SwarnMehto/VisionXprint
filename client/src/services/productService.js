import products from "../data/products";

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((item) => item.slug === slug);
}