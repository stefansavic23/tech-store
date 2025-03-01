require("dotenv").config();

const bcrypt = require("bcrypt");
const User = require("../model/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const userName = req.body.username;
  const userPassword = req.body.password;

  const hashedPassword = await bcrypt.hash(userPassword, 10);

  try {
    const users = await User.create({
      name: userName,
      password: hashedPassword,
    });
    res.render("welcome");
  } catch (error) {
    res.render("error", { message: error.message });
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const userName = req.body.username;
  const userPassword = req.body.password;

  try {
    const userFromDB = await User.find({ name: userName });
    const userNameFromDB = userFromDB[0].name;
    const hashedPassword = userFromDB[0].password;
    //const user = await User.find({ name: userName });

    const chechUser = async () => {
      bcrypt.compare(userPassword, hashedPassword, function (err, result) {
        if (result && userName === userNameFromDB) {
          return res.status(200).json(`Welcome ${userName}!`);
        } else return res.status(406).json("Username or password are not correct! Try again!");
      });
    };

    chechUser();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUser, getUser };
