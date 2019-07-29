const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(`
    <h1>Add Product</h1>
    <form action="/add-product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

router.post("/add-product", (req, res, next) => {
  const { body } = req;

  res.redirect("/shop");
});

module.exports = { adminRouter: router };
