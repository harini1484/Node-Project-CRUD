const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const orderroutes = require("./Routes/Orderroutes")
const cors=require('cors')

mongoose.connect('mongodb://localhost:27017/ordermanagement')
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("database connected successfully")
})
const app = express();
app.use(bodyparser.json())
const PORT = 5000
app.listen(PORT,()=>{
    console.log("PORT is running on 5000")
})
  
app.use(cors())
app.use("/",orderroutes)