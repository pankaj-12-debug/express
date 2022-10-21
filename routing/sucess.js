const path=require('path');
const express=require('express');
const router=express.Router()
router.get('/',(req,res,next)=>{
    console.log('sucess');
    res.sendFile(path.join(__dirname,'../','view','sucess.html'))
});
module.exports = router;