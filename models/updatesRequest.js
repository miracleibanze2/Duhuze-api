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

module.exports = mongoose.model("UpdateRequest", UpdatesRequestSchema);
