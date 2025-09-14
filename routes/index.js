const express =  require('express')
const router = express.Router()
const isLoggedIn = require("../middlewares/isLoggedIn")
const productModel = require("../models/product-model")

router.get('/', function(req, res){
    res.render('index')
})

router.get('/shop', isLoggedIn, async function(req, res){
    const products = await productModel.find()
    res.render('shop', {user:req.user, products})
})

module.exports = router