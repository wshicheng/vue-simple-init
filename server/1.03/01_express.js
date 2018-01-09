var express = require('express');// express 变量只是得到一个express对象
var app = express()// 运行express方法 得到其属性和方法
// req.url
app.get('/',function(req,res){
    res.send('hello world')
})
app.get('/yuan',function(req,res){
    console.log(req.url)
    res.send('yuan')
})
app.get(/^\/student\/([\d]{10})$/,function(req,res){
    console.log(req.params)
    res.send(`查询的该学生的学号为${req.params[0]}`)
})
app.get("/teacher/:number",function(req,res){
    // 推荐这种方式
    console.log(req.params)
    res.send(`查询的该老师的工号为${req.params.number}`)
})
var server = app.listen(3000,'127.0.0.1',function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`server is running at http://${host}:${port}`)
})