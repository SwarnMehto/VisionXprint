import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    productType: { type: String, required: true },
    quantity: { type: Number, required: true },
    requirementDetails: { type: String, required: true }
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);
export default Inquiry;