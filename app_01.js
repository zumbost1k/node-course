const http = require('http');
http
  .createServer((req, res) => {
    console.log('serwer work');
    res.end('1');
  })
  .listen(3500);
