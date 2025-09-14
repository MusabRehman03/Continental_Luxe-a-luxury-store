const ownerModel = require('../models/owner-model')
const bcrypt = require('bcrypt')

module.exports.createOwner = async function(req, res){
    let owner = await ownerModel.find()
    if(owner.length > 0){
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
           
}