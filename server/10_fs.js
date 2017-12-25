var http = require('http');
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return
    }
    // fs.stat('./images',function(err,stats){
    //     console.log(stats.isDirectory())// 判断是否是文件夹
    //     // stats.isDirectory() 如果返回是true表示加载的是文件夹 反之不是
    // })
    var wjj = []
    fs.readdir("./images",function(err,files){
        for(var i=0;i<files.length;i++){
            (function(i){
                fs.stat('./images/' + files[i],function(err,stats){
                    if(err){
                        throw err;
                    }
                    if(stats.isDirectory()){
                        wjj.push(files[i]) 
                    }
                    console.log(wjj)
                })
            })(i)
        }
    })
   
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end('hello world')
})
server.listen(3000)
console.log('server is running')