const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose-connection");// this func call was so that we ca get from which file the debugger is
//to let this debugger run , we have to run the command of: export DEBUG=development:* (this is actually setting environment in memory directly)
//annd export DEBUG=  if we dont want these messages to print
const config = require('config') //this package is required to use dev.json content (MONGODB_URI)



mongoose
  .connect(process.env.MONGODB_URI) //this is better way than in .env file
  
  .then(() => {

    dbgr("db connnected succesfully");
  })
  .catch((err) => {

    dbgr("error in db connection: ", err);
  });

module.exports = mongoose.connection;
