var http = require('http');
var qs = require('querystring')
var server = http.createServer(function(req,res){
    res.writeHeader(200,{"Content-type":"text/html;chartset=UTF-8"})
    if(req.url=='/dopost'&&req.method.toLowerCase()=='post'){
        var allData = '';
        /*
            addListener不是原生js的也不是v8的方法
            传输数据是以流的形式传输的，即buffer传送的
            buffer下面的底层是二进制传输
        */
        req.addListener('data',function(chunk){
            // chunk 是post请求分段接受来的数据
            allData += chunk;
            console.log(allData)
        })
        req.addListener('end',function(){
            //console.log(allData)
            var dataString = allData.toString()
            var dataObj = qs.parse(dataString)
            //console.log(dataObj)
        })
    }
    res.end('hello world')
})
server.listen(3000,'127.0.0.1')
console.log('server is running')