var express=require('express')
var fs=require('fs')
var app=express()
//设置模板引擎
//app.set
//engine 引擎
//下一行解释： 设置模板引擎为 ejs
app.set("view engine","ejs")
//下一行代码解析： 指定模板的具体目录
app.set("views",__dirname+"/views")
//注： 文件夹名必须命名为 views

// app.engine("view engine","ejs")
app.get("/",function(req,res){
    //express 包含ejs res=>render
    res.render("index",{
        list:["1","2","3"]
    })
})
app.listen(3000)