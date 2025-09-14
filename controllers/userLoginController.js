const userModel = require("../models/user-model");
const dbgr = require("debug")("development: usersRouter");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const productModel = require("../models/product-model")

module.exports.loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (result) {
          const products = await productModel.find()
          dbgr("user can logged in");
          let token = generateToken(user);
          res.cookie("token", token);
          res.status(200).render("shop", { user, products });
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