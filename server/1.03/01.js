var http = require('http')
var a = 10
var server = http.createServer(function(req,res){
    if(req.url=='favicon.ico'){
        return;
    }else{
        a++
        console.log(a)
    }
    // 比如这里面有n个资源需要加载
    res.end(a.toString())
})
server.listen(3000,'127.0.0.1')
console.log('server is running')