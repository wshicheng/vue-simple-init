<template>
   <div id="example">
       <h1>{{msg}}</h1>
       <ul>
           <li v-bind:key="n" v-for="n in 5">{{n}}</li>
       </ul>
   </div>
</template>
<script>
    export default{
        data:function(){
            return {
                msg:this.camelize('hello-world')
            }
        },
        methods:{
            camelize:function(str){
                var _hyphenPattern = /-(.)/g;
                var res =  str.replace(_hyphenPattern,function(a,character,c){
                    console.log("a:" + a)
                    console.log("character:" + character)
                    console.log("c:" + c)
                    return character.toUpperCase()
                })
                console.log("res:"  +res)
                return res;
            }
        }
    }
</script>