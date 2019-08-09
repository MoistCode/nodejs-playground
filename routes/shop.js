const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [{ title: "Example Product" }];

// Gets executed for / and /add-product
router.use("/", getProducts);

module.exports = { shopRouter: router };
