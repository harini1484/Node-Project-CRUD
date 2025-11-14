const express = require('express');
const router = express.Router();
const Usercontroller = require("../Controller/Usercontroller");

router.post("/adduser", Usercontroller.addUser);
router.get("/getusers", Usercontroller.getUsers);
router.get("/getuser/:id", Usercontroller.getUserById);
router.put("/updateuser/:id", Usercontroller.updateUser);
router.delete("/deleteuser/:id", Usercontroller.deleteUser);

module.exports = router;
