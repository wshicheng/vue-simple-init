var express = require('express')
var app = express()
app.use('/',express.static('./static'))
app.listen(3000,'127.0.0.1',function(){
    console.log('server is running')
})