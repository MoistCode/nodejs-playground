/**
 * Different OS use different paths
 * http launches a server; sends requests
 * https launches a SSL server
 */

const http = require("http");

function requestListener(req, res) {
    // This is what is being sent to us
    const { url, method, headers } = req;

    console.log(url, method, headers);

    // process.exit();

    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <head>
          <title>My Title</title>
        </head>
        <body>
          <h1>This is a heading</h1>
          <p>Hello from Node!</p>
        </body>
      </html>
    `);

    res.end();
}

const server = http.createServer(requestListener);

const PORT = 3000;

server.listen(PORT);
