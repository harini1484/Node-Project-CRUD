const usermodel = require("../Model/Usermodel");
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
    const page = parseInt(req.params.page) || 1;
    const limit = parseInt(req.params.limit) || 2;
const skip =(page -  1) * limit;
const search = req.query.search;
let filter = {};
if (search) {
  filter = {
    $or: [
      {name: { $regex: search,$options : 'i' }},
      {email: { $regex: search,$options: 'i' }}]
}};
    const userdata = await usermodel.find(filter).skip(skip).limit(limit);
    const totaluser= await usermodel.countDocuments(filter);
    res.json({
      data:userdata,
    currentpage:page,
    TotalCount:totaluser
    });
  } catch (error) {
    res.json({ error });
  }
};

const updateuser = async (req, res) => {
  try {
    const updated = await usermodel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "user updated successfully" });
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

module.exports = { adduser, getuser, updateuser, deleteuser, getbyid };
