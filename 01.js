var express=require('express')
var bodyParser=require('body-parser')
//body-parser是一个HTTP请求体解析的中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，
var path=require('path')
//path 路径
var publicPath=path.resolve(__dirname,"static")
var app=express()
//post json 字符串
//处理json数据的请求
app.use(bodyParser.json())
//处理字符串数据的请求
app.use(bodyParser.urlencoded({extends:false}))
//app.use()使用 中间件 插件
app.use(express.static(publicPath))
//express.static()使用静态资源服务器
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    var body=req.body
    console.log(body)
    res.send("post数据传输")
})
app.listen(3000)
