const userModel = require("../models/user-model")

module.exports.cart = async function(req, res){
        const user = await userModel.findOne({_id: req.user._id}).populate("cart")
        res.render('cart', {user})
}