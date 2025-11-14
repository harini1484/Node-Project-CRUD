const axios = require("axios")
const Order = require("../Order/Ordermodel")

const createOrder = async (req,res)=>{
    try{
     const {userId,productId,quantity} = req.body;
     const {data:user} = await axios.get(`http://localhost:4000/getuser/${userId}`)
     const {data:product} = await axios.get(`http://localhost:3001/get/${productId}`)
     const total = product.pro.Productamount * quantity;
     const order = await Order.create({userId,productId,quantity,price:total})
     res.json({
        message:"Order Placed",
        userdata:user.user,
        pro:product.pro,
        order})
    }catch(err){
       console.log(err);
    }
}

module.exports = {createOrder}
