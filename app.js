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
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  res.send(`
    <h1>Add Product</h1>
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

app.use("/product", (req, res, next) => {
  const { body } = req;

  res.redirect("/");
});

// Gets executed for / and /add-product
app.use("/", (req, res, next) => {
  res.send(`
    <h1>Homepage</h1>
  `);
});

// const server = http.createServer(app);

// server.listen(PORT);

app.listen(PORT);
