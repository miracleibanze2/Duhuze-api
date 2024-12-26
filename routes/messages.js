const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");

const messages = Router();

messages.post(
  "/",
  asyncHandler(async (req, res) => {
    try {
      // Fetch the filtered land with pagination
      const newMessage = new Message(req.body);
      await newMessage.save();

      res.status(200).send({ status: "save", newMessage });
    } catch (err) {
      console.error("Error fetching land:", err);
      res
        .status(500)
        .send({ message: "error sending message", error: err.message });
    }
  })
);

module.exports = messages;
