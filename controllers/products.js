//const product=[];

const path=require('path');
const root=require('../routing/util/path');
const Product=require('../models/product');
exports.getAddProduct=(req,res,next)=>{
    console.log('bale');
    res.sendFile(path.join(root,'view','add-product.html'));
    }
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body);
//    product.push({title: req.body.title});
  const product=new Product(req.body.title);
  product.save();
    res.redirect('/shop');
}
//exports.shopProduct=(req,res,next)=>{
//const products=Product.fetchAll();
  //  console.log('maza');
    //res.sendFile(path.join(__dirname,'../','view','shop.html'))
//};