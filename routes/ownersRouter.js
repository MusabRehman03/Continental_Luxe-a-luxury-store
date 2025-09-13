const express = require('express')
const router = express.Router()
const ownerModel = require('../models/owner-model')
const bcrypt = require('bcrypt')
//export NODE_ENV = development //this command is to set up of NODE_ENV from command line instead of in env file, in this way this will be directly stored in the memory
//this command is actual;y required to set up the environmentn to development

if(process.env.NODE_ENV === "development"){

    router.post('/create', async function(req, res){
        const owner = await ownerModel.find()
        if(owner.length > 0){
            console.log(owner)
            return res.status(500).send(owner)
        }

        const {fullname, email, password} = req.body

        bcrypt.hash(password, 10, async function(err, hash) {
            owner = await ownerModel.create({
                fullname,
                email,
                password:hash
            }) 
        });

        res.status(200).send(owner)
               
    })
}


router.get('/', function(req, res){
    res.send("its working, from ownersRouter")
})



module.exports = router