const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World\n');如果没有res.end 会存在挂起状态，也就是浏览器tab选项有一个圆圈在转
  console.log('2222')  
  res.end('hellow,world')
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/*
    注意 node 没有web容器的概念
    http://localhost:3000/article 并不会发生任何报错，也不会有任何区别，都是响应一个也没

*/