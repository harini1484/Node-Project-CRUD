const usermodel = require("../Model/Usermodel");
const imagemodel=require("../Model/Imagemodel");
const { adduserschema } = require("../Validation/Uservalidation");

const adduser = async (req, res) => {
  try {
    const { error } = adduserschema.validate(req.body);
    if (error) return res.json({ message: error.message });

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
    const userdata = await usermodel.find();
    res.json({ data: userdata });
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

const updateuser = async (req, res) => {
  try {
    const updated = await usermodel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "User Updated Successfully"});
  } catch (error) {
    res.json({ error });
  }
};

const deleteuser = async (req, res) => {
  try {
    const deleted = await usermodel.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted successfully" });
  } catch (error) {
    res.json({ error });
  }
};

const getbyid = async (req, res) => {
  try {
    const getuser = await usermodel.findById(req.params.id);
    res.json({ getuser });
  } catch (error) {
    res.json({ error });
  }
};

const uploadfile = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ message: "No file uploaded" });
    }
    res.json({ message: "File uploaded successfully", file: req.file });
  } catch (error) {
    res.json({ message: Error });
  }
};


module.exports = { adduser, getuser, updateuser, deleteuser, getbyid, uploadfile };
