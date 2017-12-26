var http  = require('http')
var queryString = require('querystring')
var server = http.createServer(function(req,res){
    console.log(req.method,req.method.toLowerCase())// 可以获取提交的方式 默认是get 
    if(req.url=='/dopost'&&req.method.toLowerCase()=='post'){
        //console.log('/dopost')
       /**
        * 下面这个公司是post的请求接受公式
            这里只接收了一小段，防止过大的请求处理阻塞进程
        */
        // 传输中
        var allData = ''
        /*
            
        在本地电脑只会看到一次分段处理、在服务器端可能有N个
        */
        req.addListener('data',function(chunk){
            allData += chunk;
        })
        // 传输完毕
        req.addListener('end',function(){
            var dataString = allData.toString()
            var dataObj = queryString.parse(dataString)
            console.log(dataObj.username)
            console.log(dataObj.password)
            res.end('success')
        })
    }
    res.writeHeader(200,{"Content-type":"text/html;charset=UTF-8"})
    res.end('hello world')
})
server.listen(3000,'127.0.0.1')
console.log('server running')