var formidable = require('formidable'),//处理表单数据
    http = require('http'),
    util = require('util');// node的工具类，无需install
var path = require('path')
var sd = require('silly-datetime') 
var fs = require('fs')
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    // 设置上传目录'
    form.uploadDir = './upload';// 注意目录必需存在，否则报错
    form.parse(req, function(err, fields, files) {
      var randomNum = '';
      for(var i=0;i<4;i++){
        randomNum += Math.floor(Math.random()*10)
      }
      var oldPath = __dirname + '/' + files.upload.path // 路径
      console.log("oldPath:" + oldPath)
      var extname = path.extname(files.upload.name);// 传入url或者文件名 
      console.log("extname:" + extname)
      var newDate = sd.format(new Date(),'YYYY-MM-DDHH:mm:ss')
      console.log("newDate:" + newDate)
      var newPath = __dirname + '/upload/' + newDate + randomNum + extname;
      console.log("newPath:" + newPath)
      /*
        newPath :需要被修改的路径
        组成部分： 当前路径 + 保存路径 + 当前时间 + 随机数字 + 后缀名
      */
      // 文件名： 年月日小时分钟秒钟 + 4位随机数 
      fs.rename(oldPath,newPath,function(err){
          if(err){
              throw Error('修改文件名字失败');
          }else{
            res.writeHead(200,{"Content-type":"text/plain"})
            res.end('success')
          }
      })//重命名文件
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      console.log(fields)
      // util.inspect（）把2个对象合并并且已字符串方式展示
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
  }
 
  // show a file upload form 
  res.writeHead(200, {'content-type': 'text/html;chartset=UTF-8'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="text" name="age"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(3000);