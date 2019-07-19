/**
 * Different OS use different paths
 * http launches a server; sends requests
 * https launches a SSL server
 */

const http = require("http");
const fs = require("fs");

function requestListener(req, res) {
  // This is what is being sent to us
  const { url, method, headers } = req;

  console.log(url, method, headers);

  // process.exit();

  switch (url) {
    case "/message":
      if (method === "POST") {
      }

      break;
    default:
      res.write(`
        <html>
          <head>
            <title>Homepage</title>
          </head>
          <body>
            <h1>This is the homepage</h1>
            <form action="/message" method="POST">
              <input type="text" name="message">
              <button type="submit">
                Submit
              </button>
            </form>
          </body>
        </html>
      `);

      break;
  }

  res.setHeader("Content-Type", "text/html");

  res.end();
}

const server = http.createServer(requestListener);

const PORT = 3000;

server.listen(PORT);
