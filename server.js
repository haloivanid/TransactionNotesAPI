const express = require('express')
const bodyParser = require('body-parser')

const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const editUSerRoute = require('./routes/users/editUserRoute')
const deleteUserRoute = require('./routes/users/deleteUserRoute')

const app = express()
app.use(bodyParser.json())

app.use(registerRoute)
app.use(loginRoute)
app.use(editUSerRoute)
app.use(deleteUserRoute)

const port = 3000
app.listen(port, () => {
    console.log(`Backend app is running in http://localhost:${port}`);
})