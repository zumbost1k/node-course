const http = require('http');
const PORT = 3500;
const fs = require('fs');

http
  .createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    switch (url) {
      case '/':
        console.log('main page');
        res.write('<h1>Main</h1>');
        res.end();
        break;
      case '/contact':
        console.log('contact page');
        let data = fs.readFileSync('./public/contact.html', {
          encording: 'utf8',
          flag: 'r',
        });
        res.write(data);
        res.end();
        break;
      default:
        if (url.includes('/images')) {
          fs.readFile('./public' + url, {}, (error, data) => {
            if (error) {
              console.log(error);
            }
            res.setHeader('Content-Type', 'image/jpg');
            res.write(data);
            res.end();
          });
        } else {
          console.log('404');
          res.write('<h1>404</h1>');
          res.end();
        }
    }
  })
  .listen(PORT);
