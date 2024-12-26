const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const address = require("../models/address.js");

const routes = Router();

routes.use("/updates-request", require("./updates"));
routes.use("/houses", require("./houses.js"));
routes.use("/land", require("./lands.js"));
routes.use("/electronics", require("./electronics.js"));
routes.use("/messages", require("./messages.js"));
routes.use("/property-like", require("./like.js"));
routes.use("/list-request", require("./listRequest.js"));

routes.get(
  "/address",
  asyncHandler(async (req, res) => {
    try {
      const data = await address.find().lean().exec();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Rwanda data.", error });
    }
  })
);

module.exports = routes;
