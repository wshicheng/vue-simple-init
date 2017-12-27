var formidable = require('formidable'),//处理表单数据
    http = require('http'),
    util = require('util');// node的工具类，无需install
 
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload 
    // create a new incoming form
    var form = new formidable.IncomingForm();
    // 当执行 form.parse() 表示表单已经全部加载完毕了
    /*
        回调函数：
        1，err 错误
        2， fields 表单数据的文本数据
        3. files    上传文件的数据
    
    */
    form.parse(req, function(err, fields, files) {
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