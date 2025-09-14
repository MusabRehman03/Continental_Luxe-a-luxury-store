const userModel = require("../models/user-model")
const jwt = require('jsonwebtoken')

module.exports = async function(req, res, next){
    if(!req.cookies.token){
        req.flash("error", "you need to login first")
        return res.redirect('/')
    }
    
    try {
        
            const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
            // console.log(decoded)
            const user = await userModel.findOne({email: decoded.email, _id:decoded._id}).select("-password")
            req.user = user;
            // console.log(user)
            console.log(req.user)
            next()
        
    } catch (error) {
        req.flash("error", "something went wrong")
        res.redirect('/')
    }
    
}