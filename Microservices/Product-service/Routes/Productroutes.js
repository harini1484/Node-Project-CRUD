const express = require('express');
const router = express.Router();

const Productcontroller = require("..//Controller/Productcontroller")

router.post("/addproduct",Productcontroller.addproduct);
router.get("/getpro" , Productcontroller.getproduct)
router.put("/updatepro/:id",Productcontroller.updateproduct)
router.delete("/delete/:id",Productcontroller.deleteproduct)
router.get("/get/:id",Productcontroller.getOne)

module.exports= router