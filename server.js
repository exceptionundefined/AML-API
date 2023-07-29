const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('AML API INIT APP');
});

const port = 3001;

server.listen(port, () => {
  //console.log(`Server running on port ${port}`);
});
