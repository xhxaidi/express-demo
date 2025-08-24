const { log } = require("console");
const { listen } = require("express/lib/application");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");

  if (req.url === "/") {
    res.end("hello world");
  }
  if (req.url === "/about") {
    res.end("hello niggs you came here to know me");
  }
});

server.listen(5001, () => {
  console.log("Server listening on port : 5001....");
});
