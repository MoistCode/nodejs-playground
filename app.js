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

const express = require("express");
const bodyParser = require("body-parser");

// Routes
const { adminRouter } = require("./routes/admin");
const { shopRouter } = require("./routes/shop");

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use("/", shopRouter);

// Handles 404
app.use((req, res, next) => {
  res.status(404).send(`
    <h1>Page not found</h1>
  `);
});

// const server = http.createServer(app);

// server.listen(PORT);

app.listen(PORT);
