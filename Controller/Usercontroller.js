const usermodel = require("../Model/Usermodel");

const adduser = async (req, res) => {
    try {
        let user = new usermodel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });

        await user.save();
        res.json({ message: "user created successfully" });
    } catch (error) {
        console.error(error);
        res.json({ message: "error occurred" });
    }
};


const getuser = async (req, res) => {
    try {
        const users = await usermodel.find();
        res.json(users);
    } catch (error) {
        res.json({ error });
    }
};

const updateuser = async (req, res) => {
    try {
        const updated = await usermodel.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: "user updated successfully" })
    } catch (error) {
        res.json({ error });
    }
};

const deleteuser = async (req, res) => {
    try {
        const updated = await usermodel.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted successfully" })
    } catch (error) {
        res.json({ error });
    }
};

const getbyid = async (req, res) => {
    try {
        const getuser = await usermodel.findByIdAndDelete(req.params.id);
    res.json({ getuser})
    } catch (error) {
        res.json({ error });
    }
};

module.exports = { adduser, getuser, updateuser, deleteuser, getbyid };
