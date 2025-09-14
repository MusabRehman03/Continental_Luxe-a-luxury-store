const express =  require('express')
const router = express.Router()
const productModel = require("../models/product-model")
const isLoggedIn = require("../middlewares/isLoggedIn")

router.get('/', function(req, res){
    res.render('index')

})

router.get('/shop', isLoggedIn, async function(req, res){
    res.render('shop')
})

module.exports = router