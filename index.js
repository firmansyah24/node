const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')
const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const icecreaam = require('./routes/icecream')

app.use(icecreaam)

var port = process.env.PORT || 8000

app.listen(port, (req, res) => {
    console.log(`Listening on ${port}`)
})