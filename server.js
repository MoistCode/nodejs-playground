/**
 * Different OS use different paths
 * http launches a server; sends requests
 * https launches a SSL server
 */

const http = require("http");

function requestListener(req, res) {}

http.createServer(requestListener);
