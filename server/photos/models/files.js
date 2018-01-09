var fs = require('fs')
exports.getAllAlbums = function(callback){
    // 读取文件/文件夹 是异步
    fs.readdir('./uploads',function(err,files){
        if(err){
            throw Error(err)
        }else{
            var allAlbums = [];
            (function iterator(i){
                if(i==files.length){
                    // 结束了
                   callback(allAlbums)
                   return;
                }
                fs.stat('./uploads/' + files[i],function(err,stats){
                    if(err){
                        throw Error('找不到文件')
                    }
                    if(stats.isDirectory()){
                        allAlbums.push(files[i])
                    }
                    iterator(++i)
                })
            })(0)
        }
    })
    //return ['animal','flowers','girls']
}
// 读取某相册中所有图片
exports.getAllImagesByPhotoName = function(photoName,callback){
    fs.readdir('./uploads/' + photoName +'/',function(err,files){
        if(err){
            callback('没有找到'+photoName+'文件夹',null)
            return;
        }else{
            var allImages = [];
            (function iterator(i){
                if(i == files.length){
                    callback(null,allImages)
                    return;
                }
                // uploads/当前点击的相册文件夹/相册文件
                fs.stat('./uploads/' + photoName +'/' + files[i],function(err,stats){
                    if(err){
                        callback('找不到文件'+ files[i],null)
                        return;
                    }
                    if(stats.isFile()){
                        allImages.push(files[i])
                    }
                    iterator(++i)
                })
            })(0)
        }
    })
}