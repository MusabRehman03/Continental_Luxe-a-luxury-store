const cookieParser = require('cookie-parser')
const express = require('express')
const app= express()
const db = require('./config/mongoose-connection')
require('dotenv').config() //this line is required to use env varibales set up in .env file

const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')
const ownersRouter = require('./routes/ownersRouter')
const index = require('./routes/index')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/owners', ownersRouter)
app.use('/', index)


app.listen(3000);