const express = require("express");
const ListRequest = require("../models/ListRequest");
const listRequest = express.Router();

// Route to handle submission
listRequest.post("/", async (req, res) => {
  try {
    // Validate incoming data
    const {
      propertyType,
      name,
      phone,
      email,
      title,
      price,
      bedrooms,
      description,
      agreement,
      province,
      district,
      sector,
      cell,
      village,
    } = req.body;

    // Ensure agreement is checked
    if (!agreement) {
      return res.status(400).json({ error: "Agreement is required." });
    }

    // Create a new ListRequest instance
    const newRequest = new ListRequest({
      propertyType,
      name,
      phone,
      email,
      title,
      price,
      bedrooms,
      description,
      agreement,
      province,
      district,
      sector,
      cell,
      village,
    });

    // Save to the database
    await newRequest.save();

    // Send a success response
    res.status(201).json({ message: "Property listed successfully!" });
  } catch (error) {
    console.error("Error saving property:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = listRequest;
