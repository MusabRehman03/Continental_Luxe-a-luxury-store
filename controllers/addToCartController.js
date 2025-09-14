const userModel = require("../models/user-model");
const productModel = require("../models/product-model");

module.exports.addToCart = async function (req, res) {
  try {
    const { userid, productid } = req.params;
    const user = await userModel.findOne({ _id: userid });
    // const product = await productModel.findOne({ _id: productid });
    user.cart.push(productid)
    await user.save()
    res.redirect('/shop')
  } catch (error) {
    res.send(error.message);
  }
};
