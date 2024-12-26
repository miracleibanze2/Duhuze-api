const { Router } = require("express");
const Address = require("../models/location");
const expressAsyncHandler = require("express-async-handler");
const rwandaData = Router();

rwandaData.get(
  "/",

  expressAsyncHandler(async (req, res) => {
    try {
      const data = await Address.find().lean().exec();
      console.log({ Address });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Rwanda data.", error });
    }
  })
);

module.exports = rwandaData;
