//;export NODE_ENV = development //this command is to set up of NODE_ENV from command line instead of in env file, in this way this will be directly stored in the memory
//;this command is actually required to set up the environmentn to development
require('dotenv').config()  //this line is required to use env varibales set up in .env file
const cookieParser = require('cookie-parser')
const express = require('express')
const app= express()
const db = require('./config/mongoose-connection')
const expressSession = require("express-session") //this is required to use flash messages
const flash = require('connect-flash') // by this flash messages, when redirect in case of any issue, the message will stillbe accessible on redirected route

const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')
const ownersRouter = require('./routes/ownersRouter')
const index = require('./routes/index')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  }))
app.use(flash())

app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/owners', ownersRouter)
app.use('/', index)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));