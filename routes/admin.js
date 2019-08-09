const express = require("express");
// const path = require("path");

// const rootDir = require("../utils/path");

const router = express.Router();

const { getProducts, postProducts } = require("../controllers/products");

router.get("/add-product", getProducts);

router.post("/add-product", postProducts);

module.exports = { adminRouter: router };
