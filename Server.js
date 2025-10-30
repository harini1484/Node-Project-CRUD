const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const userRoutes = require('./Routes/Userroutes');
const cors = require("cors");
const app=express();
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/usermanagement');
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log("Database connected successfully");
});

app.use(bodyparser.json());
app.use(cors({
  origin:'http://localhost:3000',
}))
app.use("/uploads",express.static('uploads'));
app.use("/", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
