const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname: String,
    email:String,
    password:String,
    contact:Number,
    cart:[],
    orders:[],
    isAdmin:Boolean
})
module.exports = mongoose.model('user', userSchema)