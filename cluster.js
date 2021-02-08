const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const port = 8080;

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);
    for(let i = 0; i < numCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커 종료`);
        console.log('code:', code, 'signal:', signal);
        cluster.fork();
    });
    console.log("http://localhost:"+port);
}
else{
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Hello world</h1>');
        res.end('<p>Hello Server</p>');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    })
        .listen(port, () => {
        });
    
    console.log(`${process.pid}번 워커 실행`);
}


    
    