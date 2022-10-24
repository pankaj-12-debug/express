const path=require('path');
exports.shopProduct=(req,res,next)=>{
    console.log('maza');
    res.sendFile(path.join(__dirname,'../','view','shop.html'))
};