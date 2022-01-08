console.log('Express Tutorial')

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>Hello from home page</h1>')
//     res.end();
// })

// server.listen(5000)

// const express = require('express')
// const path = require('path')

// const app =  express()

// app.use(express.static('./navbar-app'))

// app.get('/', (req,res) => {
//     // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     res.send('Hello there')
// })

// app.all('*', (req,res) => {
//     res.send('404 not found')
// })

// app.listen(5000)

const express = require('express')

const app = express()

// const {products} = require('./data')

// app.get('/api/products', (req,res)=> {
//     const newProducts = products.map(prod => {
//         const {id, name, image} = prod
//         return {id, name, image}
//     })
//     res.json(newProducts)
// })

// app.get('/', (req,res) => {
//     res.send("Hello there")
// })

// app.get('/api/products/:productId', (req,res) => {
//     const singleProduct = products.find(prod => prod.id === parseInt(req.params.productId))

//     if(!singleProduct){
//         return res.status(404).send('Product doesn\'t Exist')
//     }

//     return res.json(singleProduct)
// })

// app.get('/api/v1/search', (req, res) => {
//     console.log(req.query)
//     let sortedProducts = [...products]
//     const {query, limit} = req.query

//     if(query){
//         sortedProducts = sortedProducts.filter(product => product.name.startsWith(query))
//     }

//     if(limit){
//         sortedProducts = sortedProducts.splice(0, limit)
//     }

//     if(sortedProducts.length < 1){
//        return res.status(200).json({success: true, data: []})
//     }

//     res.status(200).json(sortedProducts)
// })

const logger = require('./logger')
const authorize = require('./authorize')

app.use([ authorize, logger])

app.get('/', (req,res) => {
    res.send('Home')
})

app.get('/about', (req,res) => {
    res.send('About')
})

app.listen(5000)