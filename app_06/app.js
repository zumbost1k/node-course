const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3500;
let mimeTypes = require('./modules/mimetypees');

const staticFile = (res, filePath, ext) => {
  console.log(filePath);
  res.setHeader('Content-Type', mimeTypes[ext]);
  fs.readFile('./public' + filePath, {}, (error, data) => {
    if (error) {
      res.statusCode = 404;
      res.end();
    }
    res.end(data);
  });
};

http
  .createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case '/':
        res.write('<h1>Main</h1>');
        res.end();
      case '/contact':
        staticFile(res, '/contact.html', '.html');
        break;
      default:
        const extName = String(path.extname(url)).toLowerCase();
        if (extName in mimeTypes) {
          staticFile(res, url, extName);
        } else {
          res.statusCode = 404;
          res.end();
        }
    }
  })
  .listen(PORT);
