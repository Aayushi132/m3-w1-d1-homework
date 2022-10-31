const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<html><body><p><b>Home Page.</b></p></body></html>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p><b>Contact Page.</b></p></body></html>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p><b>About Page.</b></p></body></html>");
    res.end();
  } else {
    res.end("Invalid Request!");
  }
});

server.listen(5000);

console.log("server running on port 5000");
