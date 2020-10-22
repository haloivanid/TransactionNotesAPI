const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.post('/register', (req, res) => {
    if (req.body) {
        const result = db.add('users', req.body)
        if (result) {
            res.status(200).send(result)
        }
        else {
            res.sendStatus(400)
        }

    }
})


module.exports = app