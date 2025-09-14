const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userRegisterController");
const { loginUser, logOut } = require("../controllers/userLoginController");
const { addToCart } = require("../controllers/addToCartController")

router.get("/", function (req, res) {
  res.send("its working, from usersRouter");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/addtocart/:userid/:productid", addToCart);

router.get("/logout", logOut);

module.exports = router;
