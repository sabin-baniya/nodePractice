const express = require('express')
const connectDB = require('./db/connection')
const notFound = require('./middlewares/notFound')
require('dotenv').config()

const app = express()

const api_v1 = require('./routes/api')

//middleware
app.use(express.json())
app.use(express.static('./public'))


//routes
app.use('/api/v1/tasks', api_v1)
app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => console.log('Connected succesfully'))

    } catch (error) {
        console.log(error)
    }
}

start()