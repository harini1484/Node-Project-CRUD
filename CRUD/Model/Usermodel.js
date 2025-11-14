const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
})

const User = mongoose.model('Usermodel', userSchema);
module.exports = User
