const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const updatesRequest = require("../models/updatesRequest");

const updates = Router();

updates.get("/", (req, res) => {
  res.status(200).send({ message: "this is updates request route" });
});

updates.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(200).send({ message: "Email required" });

    const newRequest = updatesRequest({
      email,
    });

    await newRequest.save();
    return res.status(200).send({ message: "request made successfully" });
  })
);

module.exports = updates;
