const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

// Gets executed for / and /add-product
router.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = { shopRouter: router };
