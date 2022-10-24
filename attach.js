//const http=require('http');
//const router=require('./router.js');
const path=require('path');
const express =require('express');
const adminRoutes=require('./routing/admin');
const shopRoutes=require('./routing/shop');
const contactRoutes=require('./routing/contact');
const sucessRoutes=require('./routing/sucess');
const bodyParser=require('body-parser');
const errorController=require('./controllers/error');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/',contactRoutes);
app.use('/sucess',sucessRoutes);
app.use(errorController.error);
//app.use((req,res,next)=>{
    //res.status(404).send('<h1>page not found</h1>');
  //  res.status(404).sendFile(path.join(__dirname,'view','404error.html'))
//});
app.listen(3000);