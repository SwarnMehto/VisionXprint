import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  try {
    const { companyName, productType, quantity, requirementDetails } = req.body;

    const inquiry = await Inquiry.create({
      companyName,
      productType,
      quantity,
      requirementDetails
    });

    res.status(201).json({
      message: "Inquiry submitted successfully",
      inquiry
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};