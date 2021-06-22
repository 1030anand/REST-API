const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const Schema = mongoose.Schema;
// const productSchema = Schema({
// //    _id:Schema.types.OectId,
//     _id:Schema.Types.ObjectId,
//     name:{types:String,require:true},
//     price:{types:String,require:true}
// })

const productSchema = Schema({
    _id:Schema.Types.ObjectId,
    name:{type:String,require:true},
    price:{type:Number,require:true},
    // productImage:{type:String,require:true}
})

module.exports = mongoose.model("Product",productSchema);