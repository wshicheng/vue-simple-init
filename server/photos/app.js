var express  = require('express')
var bodyParser = require('body-parser')
var app = express()
// 加载路由
var router = require('./controller/router.js')
// 设置模板引擎
app.set('view engine','ejs')
//加载静态资源
app.use('/',express.static('./static'))
app.use('/',express.static('./uploads'))
// 处理简单post 参数
app.use(bodyParser.urlencoded({extended:false}))

// 所有相册
app.get('/',router.showIndex)
// 读取相册
app.get('/:photoName',router.showPhoto)
//上传图片
app.get('/upload',router.uploadFile)
app.post('/upload',router.doPost)
// 处理error
app.use(router.handlerError)

// 启动服务器
var server = app.listen('3000','127.0.0.1',function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`server is running at http://${host}:${port}`)
})