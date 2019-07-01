const http = require("http");

// This function will run for every request sent to the server
function requestListener(req, res) {
  console.log(req);
}

http.createServer(requestListener);
