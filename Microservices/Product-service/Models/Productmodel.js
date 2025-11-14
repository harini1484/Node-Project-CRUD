const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productname:{
        type:String
    },
    productamount:{
        type:Number
    },
    productcategory:{
        type:String
    }
})
const Product = mongoose.model("Productmodel",ProductSchema);
module.exports = Product