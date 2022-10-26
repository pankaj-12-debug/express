
const products=[];
const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
const getProductsFromFile=(cb)=>{
 // const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
  //return JSON.parse(fileContent);
fs.readFile(p,(err,fileContent)=>{
  if(err)
  {
    cb([]);
  }
  //  retur('done');
  cb(JSON.parse(fileContent));
//return products;
});
}

module.exports=class Product{
constructor(t)
{
  this.title=t;
}
save()
{
  getProductsFromFile(products=>{
    products.push(this);
    fs.writeFile(p,JSON.stringify(products),(err)=>{
      console.log('hi');
      console.log(err);
    });
  });
  //const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
  //products.push(this);
 // fs.readFile(p,(err,fileContent)=>{
    //let products=[];
  //if(!err){
    //console.log('hello');//do not write and make do not make json file
    //products=JSON.parse(fileContent);
 // }
  //})
}

static fetchAll(cb)
{
  getProductsFromFile(cb);
  }
}