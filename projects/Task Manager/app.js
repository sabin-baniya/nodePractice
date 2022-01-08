const express = require('express')

const app = express()

const api_v1 = require('./routes/api')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', api_v1)

app.listen(5000)