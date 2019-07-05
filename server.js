const http = require("http");

// This function will run for every request sent to the server
function requestListener(req, res) {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  const { url } = req;

  if (url === "/") {
    res.write(`
      <html>
        <head>
          <title>Homepage</title>
        </head>
        <body>
          <form action="/message" method="POST">
            <input type="text" name="message">
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
    `);

    return res.end();
  }

  res.setHeader("Content-Type", "text/html");

  res.write(`
    <html>
      <head>
        <title>Homepage</title>
      </head>
      <body>
        <h1>You're not on the homepage ;D</h1>
      </body>
    </html>
  `);

  res.end();
}

const server = http.createServer(requestListener);
const PORT = 4000;

server.listen(PORT);
