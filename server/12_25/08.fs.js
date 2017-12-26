var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return
    }
   fs.mkdir('./images3',function(err){
        if(err){
            throw err;
        }
        res.end('创建完毕')
   })//创建文件夹 属于异步操作
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    //res.end('hello world')
})
server.listen(3000)
console.log('server is running')