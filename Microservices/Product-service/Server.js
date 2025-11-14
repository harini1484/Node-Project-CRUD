const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const productroutes = require("./Routes/Productroutes")
const cors=require("cors")

mongoose.connect('mongodb://localhost:27017/productmanagement')
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("database connected successfully")
})
const app = express();
app.use(bodyparser.json())
const PORT = 3001
app.listen(PORT,()=>{
    console.log("PORT is running on 3001")
})
 app.use(cors())
app.use("/",productroutes)