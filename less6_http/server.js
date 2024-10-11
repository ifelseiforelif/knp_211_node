import http from "node:http";
import path from "node:path";
import fs from "node:fs";
const PORT = 3000;
const mimeTypes = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jfif": "image/jfif",
};

function getStaticFile(res, filePath, ext) {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile(
    path.join(import.meta.dirname, "public", filePath),
    (err, data) => {
      if (err) {
        res.writeHead(404);
      } else {
        res.writeHead(200);
        res.write(data);
      }
      res.end();
    }
  );
}

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const url = req.url;
  switch (url) {
    case "/":
      {
        if (req.method === "GET") {
          fs.readFile(
            path.join(import.meta.dirname, "public", "pages", "index.html"),
            (err, data) => {
              if (err) {
                res.writeHead(500);
              } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
              }
              res.end();
            }
          );
        } else if (req.method === "POST") {
          let body = "";
          req.on("data", (buf) => {
            body += buf;
            console.log(body);
          });

          res.end();
        }
      }

      break;
    case "/contacts":
      fs.readFile(
        path.join(import.meta.dirname, "public", "pages", "contacts.html"),
        (err, data) => {
          if (err) {
            res.writeHead(500);
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
          }
          res.end();
        }
      );
      break;
    default:
      const extname = path.extname(url).toLocaleLowerCase();
      if (extname in mimeTypes) {
        getStaticFile(res, url, extname);
      } else {
        res.writeHead(404);
        res.end();
      }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT} ...`);
});
