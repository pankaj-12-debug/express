const path=require('path');
const express=require('express');
exports.error=(req,res,next)=>{
    //res.status(404).send('<h1>page not found</h1>');
    console.log('err');
    res.status(404).sendFile(path.join(__dirname,'..','view','404error.html'))
};