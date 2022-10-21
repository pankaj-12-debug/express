const path=require('path');
const express=require('express');
//const root=require('../routing/util/contact');
const router=express.Router();
router.get('/contact',(req,res,next)=>{
    console.log('contact');
   // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="object"><button type="submit">add product</button></form>')
res.sendFile(path.join(__dirname,'../','view','contact.html'));
})

router.post('/sucess',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/sucess');
})
module.exports=router;