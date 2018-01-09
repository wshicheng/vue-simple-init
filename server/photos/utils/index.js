var randomNum = {
    /**
     * 
     * 生成随机数 默认四位
     * @param {any} num 
     * @returns 
     */
    init:function(num){
        num = num||4
        var temp = '';
        for(var i=0;i< num;i++){
            temp += Math.floor(Math.random()*10)
        }
        return temp;
    }
}
exports.randomNum = randomNum