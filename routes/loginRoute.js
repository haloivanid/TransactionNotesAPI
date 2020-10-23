const express = require('express')
const app = express.Router()
const jwt = require('jsonwebtoken')
const db = require('../controller/dbController')

app.post('/login', (req, res) => {
    const body = req.body
    if (body) {
        if (body.password) {
            const result = db.get('users', body)
            if (result) {
                const token = jwt.sign(result, 'my_secret')
                res.status(200).send(token)
            }
            else {
                res.sendStatus(401)
            }
        }
        else {
            res.status(401).send('password must inserted')
        }
    }
})


module.exports = app