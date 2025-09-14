const userModel = require("../models/user-model");
const dbgr = require("debug")("development: usersRouter");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");


module.exports.loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (result) {
          dbgr("user can logged in");
          let token = generateToken(user);
          res.cookie("token", token);
          res.status(200).redirect("/shop");
        } else {
          res.status(403).send("invalid email or password");
          dbgr("password incorrect");
        }
      });
    } else {
      res.status(403).send("invalid email or password");
      dbgr("user does not exist");
    }
  } catch (err) {
    console.log(err.message);
  }
}

module.exports.logOut = function (req, res) {
  res.cookie("token", "");
  res.redirect('/')
}