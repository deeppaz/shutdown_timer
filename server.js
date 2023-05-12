const http = require("http");
const fs = require('fs')

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("index.html").pipe(res);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
