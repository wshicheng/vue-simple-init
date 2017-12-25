const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  if(req.url=='/home'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
    res.end('hellow:' + req.url)
  }else{
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'}); 
    res.end('页面不存在')
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
