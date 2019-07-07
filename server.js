const http = require("http");
const fs = require("fs");

// This function will run for every request sent to the server
function requestListener(req, res) {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  const { url, method } = req;

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

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Dummy");

    const body = [];

    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    // res.writeHeader(302, {});
    res.statusCode = 302;
    res.setHeader("Location", "/");
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
