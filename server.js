/**
 * Different OS use different paths
 * http launches a server; sends requests
 * https launches a SSL server
 */

const http = require("http");

function requestListener(req, res) {}

const server = http.createServer(requestListener);

const PORT = 3000;

server.listen(PORT);
