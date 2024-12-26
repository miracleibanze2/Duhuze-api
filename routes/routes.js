const { Router } = require("express");

const routes = Router();

routes.use("/updates-request", require("./updates"));
routes.use("/houses", require("./houses.js"));
routes.use("/land", require("./lands.js"));
routes.use("/electronics", require("./electronics.js"));
routes.use("/messages", require("./messages.js"));
routes.use("/property-like", require("./like.js"));
routes.use("/list-request", require("./listRequest.js"));
routes.use("/address", require("./addresses.js"));

module.exports = routes;
