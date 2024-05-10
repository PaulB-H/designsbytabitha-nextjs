/**
 * A basic HTTP server with no dependencies
 * Just to check that the build works
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

// Map file extensions to MIME types
const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
};

http
  .createServer((req, res) => {
    if (req.url === "/") req.url = "/index.html";

    const filePath = path.join(__dirname, "build", req.url);
    const fileExt = path.extname(filePath);
    const contentType = mimeTypes[fileExt] || "application/octet-stream";

    res.setHeader("Content-Type", contentType);

    fs.readFile(filePath, (err, data) => {
      res.end(data);
    });
  })
  .listen(8080);
