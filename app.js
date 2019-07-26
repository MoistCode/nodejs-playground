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

app.use((req, res, next) => {
  console.log("middleware1");
  next(); // Necessary to move forward
});

app.use((req, res, next) => {
  console.log("middleware2");
  next(); // Necessary to move forward
});

app.use((req, res, next) => {
  console.log("middleware3");

  res.send();
});

// const server = http.createServer(app);

// server.listen(PORT);

app.listen(PORT);
