const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [{ title: "Example Product" }];

// Gets executed for / and /add-product
router.use("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { products });
});

module.exports = { shopRouter: router };
