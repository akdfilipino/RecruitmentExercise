const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const territoriesRouter = require('./routers/territories.router')
const accountRouter = require('./routers/account.router')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/Territories', territoriesRouter)
app.use('/Account', accountRouter)

module.exports = app