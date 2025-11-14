const User = require("../Model/Usermodel");

const addUser = async (req, res) => {
    try {
        const { username, email} = req.body;
        await User.create({ username, email });
        res.json({ message: "User created successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (error) {
        res.json({ message: error.message });
    }
};


const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.json({ user });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.updateOne({ _id: id }, req.body);
        res.json({ message: "User updated successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getOne = async(req,res)=>{
    try{
    const id = req.params.id;
   const pro =  await User.findById({ _id: id });
res.json({pro})
    }catch(error){
  res.json({error})
  console.log(error);
  
    }
}

module.exports = { addUser, getUsers, getUserById, updateUser, deleteUser,getOne };
