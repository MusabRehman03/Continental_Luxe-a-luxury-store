const userModel = require("../models/user-model")
const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if(!req.cookies.token){
        req.flash("error", "you need to login first")
        return res.redirect('/')
    }
    
    try {
        
            const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
            const user = userModel.findOne({email: decoded.email, _id:decoded._id}).select("-password")
            req.user = user;
            next()
        
    } catch (error) {
        req.flash("error", "something went wrong")
        res.redirect('/')
    }
    
}