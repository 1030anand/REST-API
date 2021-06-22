 const express = require('express');
 const router = express.Router();    // for creating multiple routes
 const mongoose = require('mongoose');
 const Product = require('../models/product');

 router.get("/",(req,res,next)=>{
   //  res.send("this is my first product with simple request");
   res.status(200).json({
      message:"this is first product with simple request"
   });
 });
 router.post("/",(req,res,next)=>{
   //  const product={
   //     name:req.body.name,       //request to url (body) for user ip data
   //     price:req.body.price
   //  }
 
   const product = new Product({
      _id:mongoose.Types.ObjectId(),
      name:req.body.name,
      price:req.body.price 
   })
   .save()
   .then(result=>{
     res.status(200).json( console.log(result))
   })
   .catch((error)=>{
      res.status(500).json({
         error:error
      })
   })
    res.status(201).json({
       message:"post request executed successfully",
       Product:product
    });
 });
 router.get("/:productId",(req,res,next)=>{
    const id = req.params.productId;
    if(id==="special"){
      res.status(200).json({
         message:"you got special id with good offer",
         id : id
      }); 
    }else{
       res.status(200).json({
          message:"you passed simplke id",
          id : id
       })
    }
 });

 router.put("/:productId",(req,res,next)=>{
   res.status(200).json({
      message:"product updated successfully"
   });
});

router.delete("/:productId",(req,res,next)=>{
   res.status(200).json({
      message:"product deleted successfully"
   });
});



 module.exports = router;