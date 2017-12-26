/**
 * /student/123456789
 * /teacher/1234567
 * 
 * 
 */
var http = require('http')
var server = http.createServer(function(req,res){
    var currentURL = req.url
    var message = ''
    res.writeHead(200,{'Content-type':"text/html;charset=UTF-8"})
    if(currentURL.substr(0,9)=='/student/'){
        // 表示student开头
        var studentId = currentURL.substr(9)
        console.log('student loading..:' + studentId)
        if(/^\d{10}$/.test(studentId)){
            message = '您查询的学生的ID为：' + studentId
        }else{
            message = '您查询的学生的ID为：' + '不存在'
        }
    }else if(currentURL.substr(0,9)=='/teacher/'){
        var teacherId = currentURL.substr(9)
        console.log('teacher loading...:' + teacherId)
        if(/^\d{10}$/.test(teacherId)){
            message = '您查询的老师的ID为：' + teacherId
        }else{
            message = '您查询的老师的ID为：' + '不存在'
        }
    }else{
        // 单独对不存在的模块处理
        console.log('other is loading...')
        message = '404'
        
    }
    res.end(message)
    
})
server.listen(3000,'127.0.0.1')
console.log('server is running ')