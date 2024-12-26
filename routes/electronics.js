const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const Electronic = require("../models/electronic");

const electronics = Router();

electronics.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 8;

    try {
      const electronicsList = await Electronic.find()
        .skip((page - 1) * pageSize)
        .limit(pageSize);

      res.status(200).send(electronicsList);
    } catch (err) {
      console.error("Error fetching electronics:", err);
      res
        .status(500)
        .send({ message: "Error fetching electronics", error: err.message });
    }
  })
);

module.exports = electronics;
