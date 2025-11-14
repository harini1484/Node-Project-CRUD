const express=require("express")
const mailroutes= require("./Routes/Mailroutes")



const app=express()
app.use(express.json())
app.listen(5000,()=>{
    console.log("Server running on port 5000");
})



app.use("/",mailroutes);