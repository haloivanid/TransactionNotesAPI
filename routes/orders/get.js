const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

const path = require('path')
const dirName = path.resolve(__dirname).split('/').pop()

app.get(`/${dirName}`, (req, res) => {
    const result = db.get(`${dirName}`, req.query)
    if (result) {
        res.status(200).send(result)
    }
    else {
        res.sendStatus(404)
    }

})

module.exports = app