const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userRegisterController");
const { loginUser, logOut } = require("../controllers/userLoginController");
const { addToCart } = require("../controllers/addToCartController")
const isLoggedIn = require("../middlewares/isLoggedIn")
const { cart } = require("../controllers/cartController")


router.get("/", function (req, res) {
  res.send("its working, from usersRouter");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/addtocart/:userid/:productid",isLoggedIn, addToCart);

router.get("/cart", isLoggedIn, cart);


router.get("/logout", logOut);

module.exports = router;
