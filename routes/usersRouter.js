const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userRegisterController");
const { loginUser } = require("../controllers/userLoginController");

router.get("/", function (req, res) {
  res.send("its working, from usersRouter");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect('/')
});

module.exports = router;
