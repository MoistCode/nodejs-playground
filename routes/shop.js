const express = require("express");

const router = express.Router();

// Gets executed for / and /add-product
router.use("/", (req, res, next) => {
  res.sendFile("/views/shop.html");
});

module.exports = { shopRouter: router };
