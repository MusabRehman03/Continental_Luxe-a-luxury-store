const jwt = require('jsonwebtoken')

function generateToken(user){
    return jwt.sign({email:user.email, _id:user._id}, process.env.JWT_KEY)// ,{expiresIn: '1h'} bhi likha ja skts
}
module.exports = generateToken