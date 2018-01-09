var express = require('express')
var app = express()
// 原生node 通过require（'ejs'）
app.use(express.static('./static'))//设置静态资源
app.set('view engine','ejs')// 设置视图引擎，设置视图类型：ejs

app.get('/',function(req,res){
    // 渲染ejs 用render方法
    // yuan 表示文件名 由于设置视图引擎的时候已经告诉他是ejs类型了，所以无需指定后缀，默认为ejs
    // 默认是views文件夹下的文件，所以无需设置文件夹路径
    res.render('yuan',{
        "list":["think",'mark','bingo']
    })
})

var server =  app.listen(3000,'127.0.0.1',function(req,res){
    var host = server.address().address
    var port = server.address().port
    console.log('server is running at http://' + host + ":" + port)
})