const express = require('express')
const router = express.Router()
const { createOwner } = require("../controllers/createOwnerController")
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



module.exports = router