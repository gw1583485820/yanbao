var express=require('express')
var art=require('express-art-template')
var app=express()
//设置模板引擎
//第一个参数 art ejs jade=>pug swig
console.log(art)
app.engine("art",art)
app.get("/",(req,res)=>{
    res.render("new.art",{
        list:["1","2","3"]
    })
})
app.listen(3000)