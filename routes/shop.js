const express = require("express");

const router = express.Router();

// Gets executed for / and /add-product
router.get("/shop", (req, res, next) => {
  res.send(`
    <h1>Welcom to the shop!</h1>
  `);
});

module.exports = { shopRouter: router };
