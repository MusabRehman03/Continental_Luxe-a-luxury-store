const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Continental-Luxe')

const userSchema = mongoose.Schema({
    fullname: String,
    email:String,
    password:String,
    contact:Number,
    picture:String,
    isAdmin:Boolean,
    cart:[],
    orders:[]
    
})
module.exports = mongoose.model('user', userSchema)