const express = require('express')
const router = express.Router()
const isLoggedIn = require("../middlewares/isLoggedIn")
const productModel = require("../models/product-model")


router.get('/', function(req, res){
    res.send("its working, from productsRouter")
})

router.get('/shop', isLoggedIn, async function(req, res){
    const products = await productModel.find()
    res.render('shop', {products})
})

module.exports = router