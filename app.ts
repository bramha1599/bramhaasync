import * as http from 'http';

const hostname: string = '127.0.0.1';
const port: number = 3000; 

const server: http.Server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
      console.error('Error reading file:', err);
      return;
  }
  console.log('File content:', data);
});
