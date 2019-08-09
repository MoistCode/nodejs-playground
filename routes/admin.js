const express = require("express");
// const path = require("path");

// const rootDir = require("../utils/path");

const router = express.Router();

const { getAddProducts, postAddProducts } = require("../controllers/products");

router.get("/add-product", getAddProducts);

router.post("/add-product", postAddProducts);

module.exports = { adminRouter: router };
