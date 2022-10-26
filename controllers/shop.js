const path=require('path');
const Product=require('../models/product');
exports.shopProduct=(req,res,next)=>{
    //const products=Product.fetchAll();
    Product.fetchAll(products=>{
        console.log('maza');
        res.sendFile(path.join(__dirname,'../','view','shop.html'))
    })
    //console.log('maza');
    //res.sendFile(path.join(__dirname,'../','view','shop.html'))
};