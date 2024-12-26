const mongoose = require("mongoose");

// Village Schema
const VillageSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Cell Schema
const CellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  villages: [VillageSchema],
});

// Sector Schema
const SectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cells: [CellSchema],
});

// District Schema
const DistrictSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sectors: [SectorSchema],
});

// Province Schema
const ProvinceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  districts: [DistrictSchema],
});

const Address = mongoose.model("Address", ProvinceSchema);
module.exports = Address;
