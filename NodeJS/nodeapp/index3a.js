import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Good Morning\n');
});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001/');
});