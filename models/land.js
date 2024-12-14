const mongoose = require("mongoose");

const landSchema = new mongoose.Schema(
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
    location: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true, // Example: "Installment" or "Full Payment"
    },
    plotSize: {
      type: Number,
      required: true, // Size of the land in square meters or square feet
    },
    zoning: {
      type: String,
      required: false, // Example: "Residential", "Commercial", "Agricultural"
    },
    landUse: {
      type: String,
      required: false, // Example: "Farming", "Construction", "Industrial"
    },
    images: [
      {
        url: { type: String, required: true },
        description: { type: String },
      },
    ],
    isAvailable: {
      type: Boolean,
      default: true,
    },
    listedDate: {
      type: Date,
      default: Date.now,
    },
    additionalFeatures: {
      type: [String],
      default: [], // Example: "Near Water Supply", "Road Access"
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
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

const Land = mongoose.model("Land", landSchema);

module.exports = Land;
