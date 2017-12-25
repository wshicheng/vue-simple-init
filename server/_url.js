const http = require('http')
const url = require('url')// 处理URL
const fs = require('fs')
const server = http.createServer(function(req,res){
        res.writeHeader(200,{"content-type":"text/html;charset=utf-8"})
    // url 只负责获取，依赖的还是req.url
        const parameter = url.parse(req.url,true).query//帮传入的url 转换成json格式
        console.log(parameter)
        var username = parameter.username
        var password = parameter.password
        var sex = parameter.sex
        res.write('用户名为：' + username + '密码为：' + password + '性别为：' + sex)
        res.end("")
    
    
})
server.listen(3000,'127.0.0.1')
console.log('server in running on localhost:3000')