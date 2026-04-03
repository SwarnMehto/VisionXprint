import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    badge: { type: String },
    description: { type: String, required: true },
    sizes: [{ type: String }],
    materials: [{ type: String }],
    printSides: [{ type: String }],
    quantities: [{ type: Number }]
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;