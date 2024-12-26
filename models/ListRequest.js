const mongoose = require("mongoose");

// Define the schema for the ListRequest
const listRequestSchema = new mongoose.Schema(
  {
    propertyType: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    description: { type: String, required: true },
    agreement: { type: Boolean, required: true },
    province: { type: String, required: true },
    district: { type: String, required: true },
    sector: { type: String, required: true },
    cell: { type: String, required: true },
    village: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the model
const ListRequest = mongoose.model("ListRequest", listRequestSchema);

module.exports = ListRequest;
