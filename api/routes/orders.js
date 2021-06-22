const express = require('express');
const router = express.Router();    // for creating multiple routes

router.get("/",(req,res,next)=>{
  //  res.send("this is my first product with simple request");
  res.status(200).json({
     message:"this is first order with simple request"
  });
});
router.post("/",(req,res,next)=>{
   res.status(201).json({
      message:"post request executed successfully"
   });
});
router.get("/:orderId",(req,res,next)=>{
   const id = req.params.orderId;
   if(id==="special"){
     res.status(200).json({
        message:"you got special id with good offer",
        id : id
     }); 
   }else{
      res.status(200).json({
         message:"you passed simple id",
         id : id
      })
   }
});



router.delete("/:orderId",(req,res,next)=>{
  res.status(200).json({
     message:"order deleted successfully",
     id : req.params.orderId
  });
});



module.exports = router;