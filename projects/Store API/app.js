require('dotenv').config()
const express = require('express')
const app = express()

const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products list</a>')
})

app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 3000

const connectDB = async () => {
    try {
        app.listen(port, console.log(`App listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

connectDB()