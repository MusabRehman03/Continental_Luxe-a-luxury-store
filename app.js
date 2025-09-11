const cookieParser = require('cookie-parser')
const express = require('express')
const app= express()
const db = require('./config/mongoose-connection')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res)=>{

})

app.listen(3000);