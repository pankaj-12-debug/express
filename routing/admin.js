//const path=require('path');
const express=require('express');
const productController=require('../controllers/products');
//const root=require('../routing/util/path');
const router=express.Router();
router.get('/add-product',productController.getAddProduct)
//router.get('/add-product',(req,res,next)=>{
  //  console.log('bale');
   // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="object"><button type="submit">add product</button></form>')
//res.sendFile(path.join(root,'view','add-product.html'));
//res.render('add-product',{
    //pageTitle:'Add Product',
    //path:'/admin/add-product',
    //formsCSS:true,
    //productCSS:true,
   // activeAddProduct:true
//});//
//})
router.post('/add-product',productController.postAddProduct)
//router.post('/add-product',(req,res,next)=>{
  //  console.log(req.body);
    //res.redirect('/shop');
//})
module.exports=router;