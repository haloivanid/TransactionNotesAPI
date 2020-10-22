const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

const path = require('path')
const dirName = path.resolve(__dirname).split('/').pop()

app.delete(`/${dirName}`, (req, res) => {
    if (req.query.id) {
        const result = db.remove(`${dirName}`, req.query.id)
        if (result) {
            res.status(200).send(result)
        }
        else {
            res.sendStatus(400)
        }

    }
})

module.exports = app