const express = require("express");

const router = express.Router();

// Gets executed for / and /add-product
router.use("/", (req, res, next) => {
  res.send(`
    <h1>Welcomw to the shop!</h1>
  `);
});

module.exports = { shopRouter: router };
