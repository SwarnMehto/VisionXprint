import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
    items: [
      {
        name: String,
        slug: String,
        quantity: Number,
        size: String,
        material: String,
        printSide: String,
        totalPrice: Number
      }
    ],
    totalAmount: { type: Number, required: true }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;