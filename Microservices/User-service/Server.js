const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const userroutes = require("./Routes/Userroutes");

mongoose.connect('mongodb://localhost:27017/usermanagement');
const db = mongoose.connection;
db.on('error', (err) => 
    console.log(err));
db.once('open', () => 
    console.log("Database connected successfully"));

const app = express();
app.use(bodyparser.json());


const PORT = 4000;
app.listen(PORT, () => {
    console.log("User service running on port 4000");
});

app.use(cors());
app.use("/", userroutes);