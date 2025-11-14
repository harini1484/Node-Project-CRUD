const mongoose = require("mongoose")
const ImageSchema = new mongoose.Schema({
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

const Image = mongoose.model('Imagemodel', ImageSchema);
module.exports = Image
