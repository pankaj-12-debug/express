//const path=require('path');
const express=require('express');
const router=express.Router()
const shopController=require('../controllers/shop');
router.get('/',shopController.shopProduct);
//router.get('/',(req,res,next)=>{
    //console.log('maza');
  //  res.sendFile(path.join(__dirname,'../','view','shop.html'))
//});
module.exports = router;