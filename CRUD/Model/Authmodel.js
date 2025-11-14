const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AuthSchema = new Schema({
    
    name:{
        type:String,
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    }
})

const Auth = mongoose.model('Authmodel', AuthSchema);
module.exports = Auth
