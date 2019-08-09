const express = require("express");
// const path = require("path");

// const rootDir = require("../utils/path");

const router = express.Router();

const { addProduct } = require("../controllers/products");

router.get("/add-product");

router.post("/add-product", (req, res, next) => {
  const { body } = req;

  res.redirect("/");
});

module.exports = { adminRouter: router };
