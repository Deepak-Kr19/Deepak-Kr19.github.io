import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Good Evening\n');
});

server.listen(3002, () => {
    console.log('Server is running at http://localhost:3002/');
});