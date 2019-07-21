/**
 * Different OS use different paths
 * http launches a server; sends requests
 * https launches a SSL server
 */

const http = require("http");
const fs = require("fs");

function onChunkListener(body) {
  return chunk => {
    // console.log(chunk);
    body.push(chunk);
  };
}

function onChunkEndListener(body) {
  return () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split("=")[1];

    // fs.writeFileSync("message.txt", message);
    fs.writeFile("message.txt", message);

    // console.log(parsedBody);
  };
}

function requestListener(req, res) {
  // This is what is being sent to us
  const { url, method, headers } = req;

  // console.log(url, method, headers);

  // process.exit();
  res.setHeader("Content-Type", "text/html");

  switch (url) {
    case "/message":
      if (method === "POST") {
        const body = [];

        req.on("data", onChunkListener(body));
        req.on("end", onChunkEndListener(body));

        res.statusCode = 302;
        res.setHeader("Location", "/");

        // res.writeHead(302, "/");
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

  res.end();
}

const server = http.createServer(requestListener);

const PORT = 3000;

server.listen(PORT);
