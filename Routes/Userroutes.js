const express = require('express');
const router = express.Router();
const usermanagement = require("../Controller/Usercontroller");

router.post("/adduser", usermanagement.adduser);
router.get("/getuser", usermanagement.getuser);
router.put("/updateuser/:id", usermanagement.updateuser);
router.delete("/deleteuser/:id", usermanagement.deleteuser);
router.get("/getbyid/:id", usermanagement.getbyid);

module.exports = router;
