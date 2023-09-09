const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  server.on("listening", () => {
    console.log("Server is listening on port 3000");
  });

  server.on('request', (req, res) => {
    console.log(`Received a request for ${req.url}`);
  });

  res.end("Hello, World!\n");
});

const port = 3000;
const hostname = "127.0.0.1";

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
