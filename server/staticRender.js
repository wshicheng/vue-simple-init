const http = require('http');
const fs = require('fs')// 文件模块file system
const hostname = '127.0.0.1';
const port = 3000;
/*
    特别注意：写文件路径一定记得在前面加上./(如果从当前开始的话)
*/
const server = http.createServer((req, res) => {
  if(req.url=='/test'){
    fs.readFile('./test.html',function(err,data){
        // 读取文件，文件路径及名称、回调函数
        if(err) throw err;
        console.log(data)// data 读取的数据/内容
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
        res.end(data)
    })
    
  }else if(req.url=='/index.css'){
      // web没有web容器的概念，所有url 跟文件路径可以不同
    fs.readFile('./resource/index.css',function(err,data){
        // 读取文件，文件路径及名称、回调函数
        if(err) throw err;
        console.log(data)// data 读取的数据/内容
        res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'}); 
        res.end(data)
    })
  }else if(req.url=="/require.js"){
      fs.readFile('./require.js',function(err,data){
        // 读取文件，文件路径及名称、回调函数
        if(err) throw err;
        console.log(data)// data 读取的数据/内容
        res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'}); 
        res.end(data)
    })
  }else if(req.url=="/test.js"){
    fs.readFile('./test.js',function(err,data){
      // 读取文件，文件路径及名称、回调函数
      if(err) throw err;
      console.log(data)// data 读取的数据/内容
      res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'}); 
      res.end(data)
  })
}else if(req.url=="/china.js"){
      fs.readFile('./china.js',function(err,data){
        // 读取文件，文件路径及名称、回调函数
        if(err) throw err;
        console.log(data)// data 读取的数据/内容
        res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'}); 
        res.end(data)
    })
  }else if(req.url=='/add'){
    fs.readFile('./add.html',function(err,data){
        // 读取文件，文件路径及名称、回调函数
        if(err) throw err;
        console.log(data)// data 读取的数据/内容
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
        res.end(data)
    })
  }else if(req.url=='/add.css'){
    fs.readFile('./resource/add.css',function(err,data){
        // 读取文件，文件路径及名称、回调函数
        if(err) throw err;
        console.log(data)// data 读取的数据/内容
        res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'}); 
        res.end(data)
    })
  }else{
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'}); 
    res.end('页面不存在')
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
