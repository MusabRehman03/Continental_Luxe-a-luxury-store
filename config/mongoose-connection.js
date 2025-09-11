const mongoose = require('mongoose')

mongoose
.connect('mongodb://127.0.0.1:27017/Continental-Luxe')
.then(()=>{console.log('dbb connnected succesfully')})
.catch((err)=>{console.log("error in db connection: ", err)})

module.exports = mongoose.connection;