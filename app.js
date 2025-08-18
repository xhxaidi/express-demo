const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to my server");
  } else if (req.url === "/about") {
    console.log("about page");
    res.end("this is about page");
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p>We Cant seem to find the page</p>
        <a href="/">back home</a>
        `);
  }
});

server.listen(5001);
