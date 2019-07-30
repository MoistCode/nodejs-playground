const express = require("express");
const path = require("path");

const router = express.Router();

// Gets executed for / and /add-product
router.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = { shopRouter: router };
