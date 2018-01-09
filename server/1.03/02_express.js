var express = require('express')
var app = express()
app.use(express.static("./static"))//加载静态资源
app.get('/yuan',function(req,res){
    res.send("圆的页面")
})
var server = app.listen(3000,'127.0.0.1',function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`server is running at http://${host}:${port}`)
})