const mongoose = require("mongoose");

const UpdatesRequestSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UpdateRequest = mongoose.model("UpdateRequest", UpdatesRequestSchema);

module.exports = UpdateRequest;
