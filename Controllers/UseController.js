const User = require("../model/UserModel");
const Profile = require("../model/UserProfileModel");
const jwt = require("jsonwebtoken");
const Todo = require("../model/TodoModel");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      name: username,
      email: email,
      password: password,
    });

    if (user) {
      res
        .status(201)
        .json({ status: "succses", message: " successfully registred " });
    }

    const ExistingUser = User.find({ email: email });

    if (ExistingUser) {
      res
        .status(401)
        .json({ status: "failed", message: "user already existing " });
    }
  } catch (error) {
    console.log(error);
  }
};

const userLongin = async (req, res) => {
  const user = await User.findOne({ email: email });
  const id = user.id;

  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  if (!password || !user.password) {
    return res.status(400).json({ status: "error", message: "Invalid input" });
  }

  const token = jwt.sign(
    { username: user.username },

    process.env.User_access_tocken,
    {
      expiresIn: 86400,
    }
  );
  res.status(200).json({
    status: "success",
    message: "Login successful",
    data: token,
    username,
    id,
  });
};

const ProfileSetting = async (req, res) => {
  try {
    const { name, username, PhoneNumber, profileImage } = req.body;

    const Image = await Profile.create({
      name: name,
      username: username,
      PhoneNumber: PhoneNumber,
      profileImage: profileImage,
    });

    if (Image) {
      res.status(201).json({
        status: "success",
        message: "successfully addaed profile",
        data: Image,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const editProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, username, PhoneNumber, profileImage } = req.body;

    const edit = Profile.findByIdAndUpdate({
      _id: id,
      $set: {
        name: name,
        username: username,
        PhoneNumber: PhoneNumber,
        profileImage: profileImage,
      },
    });

    if (edit) {
      res.status(201).json({
        status: "success",
        messsage: "successfully updated profile ",
        data: edit,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const Addtodo = async (req, res) => {
  try {
    const { content } = req.body;
    const add = await Todo.create({
      content: content,
    });

    if (add) {
      res
        .status(201)
        .json({ status: "success", message: "successfully added todo" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    if (todo) {
      res
        .status(201)
        .json({
          staus: "success",
          message: "succesfully fetched todo ",
          data: todo,
        });
    }
  } catch (error) {
    console.log(error);
  }
};

const editTodo = async (req, res) => {
  try {
    const { content } = req.body;
    const { id } = req.params;

    const updateTodo = await Todo.findByIdAndUpdate({
      _id: id,
      $set: {
        content: content,
      },
    });
    res
      .status(201)
      .json({
        status: "success",
        message: "successfully updated ",
        data: updateTodo,
      });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const dateteTodo = await Todo.findByIdAndDelete({ _id: id });
    res
      .status(203)
      .json({ status: "success", message: "successfully deleted " });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  userLongin,
  ProfileSetting,
  editProfile,
  Addtodo,
  getTodo,
  editTodo,
  deleteTodo,
};
