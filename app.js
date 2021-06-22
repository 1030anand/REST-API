
const express = require('express');
const productRoutes = require('./api/routes/products');
const orderRoutes = require("./api/routes/orders");
const morgan = require("morgan");
const bodyParser = require('body-parser');     // use in midle ware
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://node-rest-api:node-rest-api@cluster0.iqodc.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})  //global object process.env

// use of morgon
app.use(morgan("dev"));
//use of body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// handling CROS error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header",'Origin,X-Requested-Width,Control-Type,Authorization');
    if(req.method==="OPTION"){
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json();
    }
    next();
});

//use of midle ware
app.use("/products",productRoutes);  //localhost:5555/products/
app.use("/orders",orderRoutes);

app.use((req,res,next)=>{
    // res.status(200).json({
    //     title:"this is simple response",
    //     name:"Anand"
    // });
   

res.status
 const errror = new error("not found");
 errror.status = 404;
 next(errror);
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message || "server side error"
        }
    })
})

module.exports=app;