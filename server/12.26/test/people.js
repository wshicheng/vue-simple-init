function People(name,beauty,age){
    this.name = name
    this.beauty = beauty
    this.age = age
    this.sayHello = function(){
        return 'hellow,my name is:' + this.name + ',我今年' + this.age + ',真是一个' + this.beauty
    }
}
module.exports = People