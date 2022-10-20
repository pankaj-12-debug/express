//const http=require('http');
//const router=require('./router.js');
const express =require('express');
const adminRoutes=require('./routing/admin');
const shopRoutes=require('./routing/shop');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
});
app.listen(3000);