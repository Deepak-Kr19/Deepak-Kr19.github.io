// This is a simple Node.js application that creates an HTTP server
// that listens on port 3000 and responds with "Hello, World!" to any request

import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});