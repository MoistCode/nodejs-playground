const fs = require("fs");

function requestListener(req, res) {
  // This is what is being sent to us
  const { url, method, headers } = req;

  // console.log(url, method, headers);

  // process.exit();
  res.setHeader("Content-Type", "text/html");

  switch (url) {
    case "/message":
      if (method === "POST") {
        const body = [];

        req.on("data", chunk => {
          // console.log(chunk);
          body.push(chunk);
        });

        req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];

          // fs.writeFileSync("message.txt", message);
          fs.writeFile("message.txt", message, writeMessageCB);

          // console.log(parsedBody);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/");

        // res.writeHead(302, "/");
      }

      break;
    default:
      res.write(`
          <html>
            <head>
              <title>Homepage</title>
            </head>
            <body>
              <h1>This is the homepage</h1>
              <form action="/message" method="POST">
                <input type="text" name="message">
                <button type="submit">
                  Submit
                </button>
              </form>
            </body>
          </html>
        `);

      break;
  }

  res.end();
}

module.exports = {
  requestListener
};
