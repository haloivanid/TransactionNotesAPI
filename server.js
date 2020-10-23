const express = require('express')
const bodyParser = require('body-parser')

const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const editUSerRoute = require('./routes/users/editUserRoute')
const deleteUserRoute = require('./routes/users/deleteUserRoute')

const getOrdersRoute = require('./routes/orders/get')
const addOrdersRoute = require('./routes/orders/add')
const editOrdersRoute = require('./routes/orders/edit')
const removeOrdersRoute = require('./routes/orders/remove')

const getTransactionsRoute = require('./routes/transactions/get')
const addTransactionsRoute = require('./routes/transactions/get')
const editTransactionsRoute = require('./routes/transactions/get')
const removeTransactionsRoute = require('./routes/transactions/get')

const app = express()
app.use(bodyParser.json())

app.use(registerRoute)
app.use(loginRoute)
app.use(editUSerRoute)
app.use(deleteUserRoute)

app.use(getOrdersRoute)
app.use(addOrdersRoute)
app.use(editOrdersRoute)
app.use(removeOrdersRoute)

app.use(getTransactionsRoute)
app.use(addTransactionsRoute)
app.use(editTransactionsRoute)
app.use(removeTransactionsRoute)

const port = 3000
app.listen(port, () => {
    console.log(`Backend app is running in http://localhost:${port}`);
})