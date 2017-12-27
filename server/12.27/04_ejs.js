var ejs = require('ejs')
var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){
        return;
    }
    fs.readFile('./views/index.ejs',function(err,data){
        var template = data.toString()
        var data = {
            num:12,
            list:[
                {title:'think',age:19},
                {title:'yangyang',age:15},
                {title:'jack',age:12},
                {title:'brown',age:20}
            ]
        }
        var html = ejs.render(template,data)
        res.writeHead(200,{"Content-type":'text/html;chartset=UTF-8'})
        res.end(html)
    })
})
server.listen(3000,'127.0.0.1')