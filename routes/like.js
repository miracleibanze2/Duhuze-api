const express = require("express");
const House = require("../models/house");
const Land = require("../models/land");
const Electronic = require("../models/electronic");
const like = express.Router();

// Route to handle like requests
like.post("/", async (req, res) => {
  const { type, id } = req.body;

  if (!type || !id) {
    return res.status(400).json({ error: "Type and ID are required" });
  }
  console.log("liking", id);

  let Model;
  switch (type) {
    case "houses":
      Model = House;
      break;
    case "land":
      Model = Land;
      break;
    case "electronics":
      Model = Electronic;
      break;
    default:
      return res.status(400).json({ error: "Invalid property type" });
  }

  try {
    const property = await Model.findById(id);
    if (!property) {
      return res.status(404).send({ message: "Property not found" });
    }

    property.likes = (property.likes || 0) + 1; // Increment likes
    await property.save();

    console.log("liked", id);
    return res.status(200).send({
      message: `${type} liked successfully`,
      property,
    });
  } catch (error) {
    console.error("Error liking property:", error);
    return res.status(500).send({ message: "Internal server error", error });
  }
});

module.exports = like;
