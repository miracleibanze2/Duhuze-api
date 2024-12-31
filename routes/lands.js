const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const Land = require("../models/land");

const land = Router();

land.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 8;

    // Destructure the filter parameters from the request query
    const {
      province,
      district,
      sector,
      cell,
      village,
      maximumPrice,
      minimumPrice,
      paymentType,
      isAvailable,
    } = req.query;

    // Dynamically build the query object
    const query = {};

    // Address filtering
    if (province)
      query["address.province"] = { $regex: province, $options: "i" };
    if (district)
      query["address.district"] = { $regex: district, $options: "i" };
    if (sector) query["address.sector"] = { $regex: sector, $options: "i" };
    if (cell) query["address.cell"] = { $regex: cell, $options: "i" };
    if (village) query["address.village"] = { $regex: village, $options: "i" };

    // Payment type filtering
    if (paymentType) query.paymentType = { $regex: paymentType, $options: "i" };

    // Price range filtering
    if (maximumPrice)
      query.price = { ...query.price, $lte: parseInt(maximumPrice) };
    if (minimumPrice)
      query.price = { ...query.price, $gte: parseInt(minimumPrice) };

    // Availability filtering
    if (isAvailable !== undefined) query.isAvailable = isAvailable === "true";

    console.log("query to MongoDB", query);
    console.log("for page", page);

    try {
      // Fetch the filtered land with pagination
      const landList = await Land.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize);

      res.status(200).send(landList);
    } catch (err) {
      console.error("Error fetching land:", err);
      res
        .status(500)
        .send({ message: "Error fetching land", error: err.message });
    }
  })
);

module.exports = land;
