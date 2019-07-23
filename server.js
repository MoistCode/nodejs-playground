/**
 * Different OS use different paths
 * http launches a server; sends requests
 * https launches a SSL server
 * Worker pools handle the heavy lifting (i.e., fs); different threads\
 * CBs go to event loop
 * Client => Req => Server => Res => Client
 * Node program quites when there is no more work to do
 * createServer never finishes by default; process.exit()
 */

const http = require("http");

const { requestListener } = require("./routes");

const server = http.createServer(requestListener);

const PORT = 3000;

server.listen(PORT);
