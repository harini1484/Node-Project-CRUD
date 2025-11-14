const express = require('express');
const router = express.Router();

const Ordercontroller = require("..//Controller/Ordercontroller")

router.post("/addorder",Ordercontroller.createOrder);

module.exports= router