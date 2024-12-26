const mongoose = require("mongoose");

const electronicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Mobile", "Laptop", "Tablet", "Accessories", "Others"], // Define electronic categories
    },
    specifications: {
      type: Map,
      of: String, // Use a map for flexible key-value pairs (e.g., "RAM": "8GB")
    },
    images: [
      {
        url: { type: String, required: true },
        description: { type: String },
      },
    ],
    condition: {
      type: String,
      required: true,
      enum: ["New", "Used", "Refurbished"],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    listedDate: {
      type: Date,
      default: Date.now,
    },
    warranty: {
      type: String, // Example: "6 months", "1 year", or "No Warranty"
      required: false,
    },
    sellerContact: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: false },
    },
    additionalFeatures: {
      type: [String],
      default: [], // Example: "Free Shipping", "Extended Warranty Available"
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    likes: Number,
    address: {
      province: { type: String, required: true },
      district: { type: String, required: true },
      sector: { type: String, required: true },
      cell: { type: String, required: true },
      village: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Electronic = mongoose.model("Electronic", electronicSchema);

module.exports = Electronic;
