const express = require("express");
const orders = require("../routes/orders");
const error = require("../middleware/error");
const cors = require("../middleware/cors");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors);
  app.use("/api/orders", orders);
  app.use(error);
};
