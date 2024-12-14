const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const address = require("../models/address");

const routes = Router();

routes.use("/updates-request", require("./updates"));
routes.use("/houses", require("./houses"));

routes.get(
  "/address",
  asyncHandler(async (req, res) => {
    console.log("this is address");
    try {
      const data = await address.find().lean().exec();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Rwanda data.", error });
    }
  })
);

module.exports = routes;
