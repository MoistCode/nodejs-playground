const express = require("express");

const router = express.Router();

// Gets executed for / and /add-product
router.get("/", (req, res, next) => {
  res.send(`
    <h1>Homepage</h1>
  `);
});

module.exports = { shopRouter: router };
