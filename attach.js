//const http=require('http');
//const router=require('./router.js');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('hello');
    next();
});
app.use((req,res,next)=>{
    console.log('hello world');
    res.send('{ key1: value }');
});
//const server=http.createServer(router);
//const server=http.createServer(app);
//server.listen(4500);
app.listen(4500);