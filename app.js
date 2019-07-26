/**
 * Alternatives to Express.js; most popular
 *  1.      Vanilla Node.js
 *  2.      Adonis.js
 *  3.      Koa
 *  4.      Sails.js
 *
 *  Highly flexible
 *  Middlewares!
 */

const http = require("http");
const express = require("express");

const app = express();

const PORT = 3000;

app.use("/", (req, res, next) => {
  console.log("middleware");

  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(`
    <h1>Add Product</h1>
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

app.use("/product", (req, res, next) => {});

// Gets executed for / and /add-product
app.use("/", (req, res, next) => {
  res.send(`
    <h1>Homepage</h1>
  `);
});

// const server = http.createServer(app);

// server.listen(PORT);

app.listen(PORT);
