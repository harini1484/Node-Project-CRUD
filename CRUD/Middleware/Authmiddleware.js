const jwt = require("jsonwebtoken")
const mysecret = "mykey"; 

const verifytoken = (req, res, next) => {
  try {
    const authheader = req.headers.authorization;
    if (!authheader) {
    res.json({ message: "No Token Found" }); 
    }

    const token = authheader.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, mysecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.json({ message: "Invalid or Expired Token" });
    console.log(error);
  }
};

module.exports = { verifytoken };
