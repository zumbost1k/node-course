const http = require('http');
http
  .createServer((req, res) => {
    console.log(req.url, req.method);
    console.log('serwer work');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>hello world</h1>');
    res.end();
  })
  .listen(3500);
