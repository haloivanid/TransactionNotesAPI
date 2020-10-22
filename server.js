const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000
app.listen(port, () => {
    console.log(`Backend app is running in http://localhost:${port}`);
})