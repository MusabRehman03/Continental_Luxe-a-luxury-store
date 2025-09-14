const express = require('express')
const router = express.Router()
const { createOwner } = require("../controllers/createOwnerController")
const upload = require("../config/multer-config")
const productModel = require("../models/product-model")
//export NODE_ENV=development //this command is to set up of NODE_ENV from command line instead of in env file, in this way this will be directly stored in the memory
//this command is actual;y required to set up the environmentn to development

if(process.env.NODE_ENV === "development"){

    router.post('/create', createOwner)
}


router.get('/', function(req, res){
    res.send("its working, from ownersRouter")
})

router.get('/createproduct', function(req, res){
    res.render('createproduct')
})

router.post('/createproduct', upload.single("image"), function(req, res){
    try {
        const {name, price, discount, bgcolor, panelcolor, textcolor} = req.body
        const image = req.file.buffer
        productModel.create({
            image, name, price, discount,
            bgColor: bgcolor, 
            panelColor: panelcolor, 
            textColor: textcolor
        })
        res.redirect('/owners/createproduct')
    } catch (error) {
        res.send(error.message)
    }
   


})



module.exports = router