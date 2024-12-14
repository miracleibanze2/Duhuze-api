require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { corsOptions } = require("./config/cors");
const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.err("There was error connecting to database", err);
  });

app.use(express.json());
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  return res.status(200).send({
    message:
      "this is Hamwe API to provide data to Hamwe project which is based on providing location information on houses.",
  });
});

app.use("/api", require("./routes/routes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
