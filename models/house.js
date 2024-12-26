const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
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
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
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
      default: [],
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

const House = mongoose.model("House", houseSchema);

module.exports = House;
