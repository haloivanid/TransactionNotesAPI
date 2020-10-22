const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.get('/', (_, res) => {
    res.send("Hello world!")
})

module.exports = app