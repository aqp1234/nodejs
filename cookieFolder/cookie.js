const http = require('http');
const port = 8000;

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end("Hello Cookie");
}).listen(port, () => {
    console.log("http://localhost:"+port);
});