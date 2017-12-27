var ejs = require('ejs')
var str = '好开心，今天中了<%= num %>等奖';
var data = {
    num:1
}
var html = ejs.render(str,data)
console.log(html)