const express = require('express');
const router = express.Router();

const usermanagement = require("../Controller/Usercontroller");
const Authmanagement = require("../Controller/Authcontroller");
const { upload } = require("../Middleware/Upload");
const {verifytoken}=require("../Middleware/Authmiddleware");
const pdfcontroller=require("../Controller/Pdfcontroller");
const doccontroller = require("../Controller/Doccontroller");


//user controller
router.post("/adduser", usermanagement.adduser);
router.get("/getuser/:page/:limit", usermanagement.getuser);
router.put("/updateuser/:id", usermanagement.updateuser);
router.delete("/deleteuser/:id", usermanagement.deleteuser);
router.get("/getbyid/:id", usermanagement.getbyid);
router.get("/getdata", verifytoken, usermanagement.getuser);


//auth controller
router.post("/register", Authmanagement.register);
router.post("/login", Authmanagement.login);


//images

router.post("/upload", upload.single('file'), usermanagement.uploadfile);
router.post("/uploadpdf",upload.single('pdf'),pdfcontroller.uploadpdffile);
router.post("/uploaddoc", upload.single("doc"), doccontroller.uploaddocfile);


module.exports = router;
