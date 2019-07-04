const http = require("http");

// This function will run for every request sent to the server
function requestListener(req, res) {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");

  res.write(`
    <html>
      <head>
        <title>My First Page</title>
      </head>
      <body>
        <h1>This is a very complex html file</h1>
      </body>
    </html>
  `);

  res.end();
}

const server = http.createServer(requestListener);
const PORT = 4000;

server.listen(PORT);
