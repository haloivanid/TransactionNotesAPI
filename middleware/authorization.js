const jwt = require('jsonwebtoken')

function authorization(req, res, next) {
    const authorization = req.headers.authorization
    try {
        jwt.verify(authorization, 'my_secret')
        next()
    } catch (error) {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorization