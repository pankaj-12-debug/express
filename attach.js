//const http=require('http');
//const router=require('./router.js');
const express =require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/about',(req,res,next)=>{
    console.log('us');
    res.send('<h1>"About" page</h1>')
})
app.use('/add-product',(req,res,next)=>{
    console.log('bale');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="object"><button type="submit">add product</button></form>')
})
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    console.log('maza');
    res.send('<h1>hello express</h1>')
})

//const server=http.createServer(router);
//const server=http.createServer(app);
//server.listen(4500);
app.listen(3000);