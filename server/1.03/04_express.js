var express = require('express')
var app = express()
/*
    app.use 函数

*/
app.set('view engine','ejs')

// app.get('路由'，callback)
app.use('/',function(req,res,next){
    // 匹配任何
    console.log(new Date())
    next()
    //res.send('任何。。。')
   
   
})
// express 路由只会认第一个匹配的路由
app.use('/loading',function(req,res){
    console.log('req.url:'+ req.url)
    console.log("1:"+req.originalUrl)
    console.log("2:"+req.baseUrl)
    console.log("3:"+req.path)
    res.render('upload')
})




var server = app.listen(3000,'127.0.0.1',function(req,res){
    var host = server.address().address
    var port = server.address().port
    console.log(`server is running at http://${host}:${port}`)
})