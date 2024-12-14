const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const House = require("../models/house");

const houses = Router();

houses.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 3;

    try {
      const housesList = await House.find()
        .skip((page - 1) * pageSize)
        .limit(pageSize);

      res.status(200).send(housesList);
    } catch (err) {
      console.error("Error fetching houses:", err);
      res
        .status(500)
        .send({ message: "Error fetching houses", error: err.message });
    }
  })
);

module.exports = houses;
