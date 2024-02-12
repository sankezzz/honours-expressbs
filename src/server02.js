import http from 'http';

const server = http.createServer((req, res) => {
  console.log('Received request');
  console.log(req.method, req.url);

  res.setHeader('Content-Type', 'text/html');// this is to get the next method in html format
  // res.setHeader('Content-Type', 'text/plain'); //this is to get plain text not in an html format
  res.end('<h1>Request Accepted!</h1>');
});

server.listen(3000);
