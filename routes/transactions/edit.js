const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

const path = require('path')
const dirName = path.resolve(__dirname).split('/').pop()

app.patch(`/${dirName}`, (req, res) => {
    if (req.body && req.query.id) {
        const result = db.edit(`${dirName}`, req.query.id, req.body)
        if (result) {
            res.status(200).send(result)
        }
        else {
            res.sendStatus(400)
        }

    }
})

module.exports = app