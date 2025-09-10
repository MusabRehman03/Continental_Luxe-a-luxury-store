const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    image: String,
    name:String,
    price:String,
    discount:Number,
    bgColor:String,
    panelColor:String,
    textColor:String
})

module.exports = mongoose.model('user', postSchema)