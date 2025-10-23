const express = require('express');
const router = express.Router();


const usermanagement = require("../Controller/Usercontroller");
const Authmanagement = require("../Controller/Authcontroller");

//user controller
router.post("/adduser", usermanagement.adduser);
router.get("/getuser", usermanagement.getuser);
router.put("/updateuser/:id", usermanagement.updateuser);
router.delete("/deleteuser/:id", usermanagement.deleteuser);
router.get("/getbyid/:id", usermanagement.getbyid);



//auth controller
router.post("/register", Authmanagement.register);



module.exports = router;
