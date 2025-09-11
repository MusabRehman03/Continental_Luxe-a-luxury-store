const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose-connection");// required as we are makingn env variables in config/development.js
const config = require('config')

mongoose
  .connect(`${config.get('MONGODB_URI')}/Continental-Luxe`) //this is better way than in .env file
  .then(() => {
    dbgr("db connnected succesfully");
  })
  .catch((err) => {
    dbgr("error in db connection: ", err);
  });

module.exports = mongoose.connection;
