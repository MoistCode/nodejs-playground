const http = require("http");

// This function will run for every request sent to the server
function requestListener(req, res) {
  console.log(req);
}

const server = http.createServer(requestListener);
const PORT = 3000;

server.listen(PORT);
