const express = require('express')
const connectDB = require('./db/connection')
require('dotenv').config()

const app = express()

const api_v1 = require('./routes/api')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', api_v1)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => console.log('Connected succesfully'))

    } catch (error) {
        console.log(error)
    }
}

start()