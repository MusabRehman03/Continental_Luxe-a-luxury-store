const userModel = require("../models/user-model");
const dbgr = require("debug")("development: usersRouter");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

module.exports.registerUser = function (req, res) {
  try {
    const { fullname, email, password } = req.body;
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) return res.send(err.message);
      else {
        const user = await userModel.create({
          fullname,
          email,
          password: hash,
        });
        dbgr(user);
        let token = generateToken(user);
        res.cookie("token", token);
        
        res.status(200).render("home", { user });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
