const productmodel = require("../Models/Productmodel")

const addproduct = async(req,res)=>{
try{
const {productname,productamount,productcategory} = req.body;
const product = await productmodel.create({productname,productamount,productcategory});
res.json({message:"product created successfully"});
}catch(error){
res.json({message:error})
}
}

const getproduct = async(req,res)=>{
    try{
const pro = await productmodel.find();
res.json({pro})
    }catch(error){
  res.json({error})
    }
}

const updateproduct = async(req,res)=>{
    try{
    const id = req.params.id;
    await productmodel.updateOne({ _id: id }, req.body);
res.json({message:"product updated successfully"})
    }catch(error){
  res.json({error})
  console.log(error);
  
    }
}

const deleteproduct = async(req,res)=>{
    try{
    const id = req.params.id;
    await productmodel.deleteOne({ _id: id });
res.json({message:"product deleted successfully"})
    }catch(error){
  res.json({error})
  console.log(error);
  
    }
}
const getOne = async(req,res)=>{
    try{
    const id = req.params.id;
   const pro =  await productmodel.findById({ _id: id });
res.json({pro})
    }catch(error){
  res.json({error})
  console.log(error);
  
    }
}

module.exports = {addproduct,getproduct,updateproduct,deleteproduct,getOne};