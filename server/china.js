// define({
//     provinces:[{name:'上海',areas:['浦东新区','徐汇区']},{name:'江苏',areas:['南京','南通']}]
// })
define(function(require,exports,module){
    function Map(){
        var struct = function(key,value){
            this.key = key
            this.value = value
        }
        this.arr = []
        this.put = function(key,value){
            for(var i=0;i<this.arr.length;i++){
                if(this.arr[i].key === key){
                    this.arr[i].value = value
                    return;
                }
            }
            this.arr[this.arr.length] = new struct(key,value)
        }
        this.get = function(key){
            for(var i=0;i<this.arr.length;i++){
                if(this.arr[i].key==key){
                    return this.arr[i].value
                }
            }
            return null
        }
        this.remove = function(key){
            var v;
            for(var i=0;i<this.arr.length;i++){
                v = this.arr.pop()
                if(v.key == key){
                    continue
                }
                this.arr.unshift(v)
            }
        }
    }
    module.exports = Map
})