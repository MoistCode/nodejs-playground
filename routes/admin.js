const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile("/views/add-products");
});

router.post("/add-product", (req, res, next) => {
  const { body } = req;

  res.redirect("/");
});

module.exports = { adminRouter: router };
