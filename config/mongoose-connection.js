const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose-connection");// required as we are makingn env variables in config/development.js
//to let his debugger run , we have to run the command of: export DEBUG=development:*
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
