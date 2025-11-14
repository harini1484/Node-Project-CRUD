const express=require('express')
const{sendmail}=require("../Controller/Mailcontroller")
const router=express.Router();

router.post("/sendmail",sendmail);


module.exports= router