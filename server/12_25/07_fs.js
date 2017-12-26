var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return
    }
    var ranNum = parseInt(Math.random()*10000)
    fs.readFile('./1.txt',function(err,data){
        if(err){
            throw err;
        }
        console.log(ranNum + '文件读取完毕')
        res.end(data)
    })
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    //res.end('hello world')
})
server.listen(3000)
console.log('server is running')