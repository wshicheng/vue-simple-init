// // function getComponents(){
// //     return import(/* webpackChunkName:"lodash"*/ 'lodash').then( _ => {
// //         var ele = document.createElement('div')
// //         ele.innerHTML = _.join(['hello','webpack'],' ')
// //         return ele
// //     }).catch(error => {
// //         'an error occurred while loading the component'
// //     })
// // }

// // async function getComponent(){
// //     var ele = document.createElement('div')
// //     const _ = await import(/* webpackChunkName:"lodash"*/ 'lodash')
// //     ele.innerHTML = _.join(['hello','webpack'],' ')
// //     return ele
// // }
// // getComponent().then(component => {
// //     document.body.appendChild(component)
// // })

// // 点
// function Point(x,y){
//     this.x = x
//     this.y = y
// }
// // 线
// function Line(p1,p2){
//     this.p1 = p1
//     this.p2 = p2
//     this.length = Math.sqrt(Math.pow(p1.x - p2.x,2) + Math.pow( p1.y - p2.y,2))
// }
// // 图形
// function Shape (){
//     this.points = []
//     this.lines = []
//     this.init()
// }
// Shape.prototype = {
//     constructor:Shape,
//     init:function(){
//         if(this.context===undefined){
//             var canvas = document.getElementById('canvas')
//             this.context = canvas.getContext('2d')
           
//         }
//     },
//     draw:function(){
//         var i,ctx = this.context
//         ctx.strokeStyle = this.getColor()
//         ctx.beginPath()
//         ctx.moveTo(this.points[0].x,this.points[0].y)
//         for(i=0;i<this.points.length;i++){
//             ctx.lineTo(this.points[i].x,this.points[i].y)
//         }
//         ctx.closePath()
//         ctx.stroke()
//     },
//     getColor:function(){
//         var i,rgb=[];
//         for(i=0;i<3;i++){
//             rgb[i] = Math.round(255 * Math.random())
//         }
//         return 'rgb('+rgb.join(',')+')'
//     },
//     getLines:function(){
//         if(this.lines.length>0){
//             return this.lines
//         }
//         var i,lines = []
//         for(i = 0;i<this.points.length;i++){
//             lines[i] = new Line(this.points[i],this.points[i+1]||this.points[0])
//         }
//         this.lines  = lines;
//         return lines;
//     },
//     getArea:function(){},
//     getPerimeter:function(){
//         var i,perim = 0,lines = this.getLines()
//         for(i=0;i<lines.length;i++){
//             perim += lines[i].length
//         }
//         return perim
//     }

// }
// function Triangle(a,b,c){
//     this.points = [a,b,c]
//     this.getArea = function (){
//         var perimeter = this.getPerimeter()
//         var s = perimeter/2
//         return Math.sqrt(s*(s-this.lines[0].length)*(s-this.lines[1].length)*(s-this.lines[2].length)) 
//     }
// }
// function Rectangle(p,side_a,side_b){
//     this.points = [p,new Point(p.x + side_a,p.y),new Point(p.x + side_a,p.y + side_b),new Point(p.x,p.y + side_b)]
//     this.getArea = function (){
//         return side_a * side_b
//     }   
// }
// function Square(p,side){
//     Rectangle.call(this,p,side,side)
// }
// (function(){
//     var s = new Shape()
//     Triangle.prototype = s
//     Rectangle.prototype = s
//     Square.prototype = s
//     var p1 =  new Point(100,100)
//     var p2 = new Point(300,100)
//     var p3 = new Point(200,0)
//     var t  = new Triangle(p1,p2,p3)
//     console.log(t.init)
//     t.draw()
// })()
import Vue from 'vue'
import App from './App.vue'
new Vue({
    el:'#app',
    render:h => h(App)
})