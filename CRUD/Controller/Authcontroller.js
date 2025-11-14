const Authmodel = require("../Model/Authmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
    
    try {
    const { name, email, phone, password } = req.body;

    const existing = await Authmodel.findOne({email});
    if(existing) 
        return res.json({message : "User already exists"});
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user=await Authmodel.create({name, email, phone, password: hashedPassword})
    return res.json({message : "user Registered Successfully",user});
    }catch (error) {
    return res.json(error)
    }
    }


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Authmodel.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { _id: user.id, email: user.email },
      "mykey",             
      { expiresIn: "5m" }
    );

    return res.json({ message: "Login Successful", token });
 
        }catch (error){
            console.log(error);
        }
        }

    module.exports = {
    register,login
    }