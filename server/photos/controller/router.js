/*
    路由只是方法的罗列、具体的业务实现由model实现
*/
var fs = require('fs')
var file = require('../models/files.js')
var formidable = require('formidable')
var path = require('path')
var util = require('util')
var sd = require('silly-datetime')
var genernaNum = require('../utils/index.js')
exports.showIndex = function(req,res,next){
    // 读取所有相册
    file.getAllAlbums(function(allAlbums){
        res.render('index',{
            allAlbums:allAlbums
        })
    })
}
// 显示所有照片
exports.showPhoto = function(req,res,next){
    // 获取点击的相册名
    var photoName = req.params.photoName
    file.getAllImagesByPhotoName(photoName,function(err,imagesArr){
        if(err){
            //throw err;
            next()
            return;
        }
        res.render('photo',{
            allImages:imagesArr,
            photoName:photoName
        })
        //
    })
}
// 展示所有相册
exports.uploadFile = function(req,res,next){
    file.getAllAlbums(function(allAlbums){
        res.render('upload',{
            allAlbums:allAlbums
        })
    })
}
exports.doPost = function(req,res,next){
    var form = new formidable.IncomingForm()

    //当到parse的时候，就已经接受到请求了
    // 在parse之前，设置上传路径，也就可能没有接收到请求 
    /*
        解决方法
        先设置一个默认的上传目录
        等接受到表单数据之后，再移动到指定的表单目录中
    
    */
    form.uploadDir = path.normalize(__dirname + '/../temp/')
    form.parse(req,function(err,fields,files,next){
        // res.send(util.inspect({
        //     fields:fields,
        //     files:files
        // }))
        // return;
        // 不能在里面设置上传路径
        // 可以设置上传的最大文件大小
        if(err){
            next()
            return;
        }
        var size = files.uploadFile.size/(1024*1024) // 获取图片尺寸
        if(size > 2){
            res.send('上传文件大小应小于' + '10M')
            fs.unlink(files.uploadFile.path)//删除已经上传的
            return;
        }
        var newDate = sd.format(new Date(),'YYYYMMDDHHmmss');
        var num = genernaNum.randomNum.init(5)
        var extname = path.extname(files.uploadFile.name)//获取文件后缀名
        var folderName = fields.folderName// 拿到指定的上传相册名
        var oldPath = files.uploadFile.path
        var newPath = path.normalize(__dirname + '/../uploads/'+folderName +'/' + (newDate + num + extname) )
        fs.rename(oldPath,newPath,function(err){
            if(err){
                res.send('改名失败')
            }else{
                res.send('成功')
            }
            
        })
    })
}
exports.handlerError = function(req,res,next){
    res.render('error')
}