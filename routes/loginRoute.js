const express = require('express')
const app = express.Router()
const hyperid = require('hyperid')
const db = require('../controller/dbController')

app.post('/login', (req, res) => {
    if (req.body) {
        const instance = hyperid()
        const result = db.get('users', req.body)
        if (result) {
            result.token = instance()
            res.status(200).send(result)
        }
        else {
            res.sendStatus(401)
        }
    }
})


module.exports = app