const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image: Buffer,
    name:String,
    price:String,
    discount:Number,
    bgColor:String,
    panelColor:String,
    textColor:String
})

module.exports = mongoose.model('product', productSchema)