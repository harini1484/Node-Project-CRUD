const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    userId:{
        type:String
    },
    productId:{
        type:String
    },
    quantity:{
        type:Number
    },
    price:{
        type:Number
    }
})
const Order = mongoose.model("Ordermodel",OrderSchema);
module.exports = Order