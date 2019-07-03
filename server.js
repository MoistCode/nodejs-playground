const http = require("http");

// This function will run for every request sent to the server
function requestListener(req, res) {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
}

const server = http.createServer(requestListener);
const PORT = 4000;

server.listen(PORT);
