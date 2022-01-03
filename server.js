// const http = require('http')

// const server = http.createServer((req, res)=> {
//     res.write('Hello World')
//     res.end();
// })

// server.listen('3000', ()=> {
//     console.log('Server listening on port 3000')
// // })

// const express = require('express')

// const app = express()

// app.get('/', (req,res) => {
//     res.send('Hello World')
// })

// //sending files with node
// const path = require('path')

// app.use('/', express.static(path.resolve(__dirname, 'portfolio')))

// app.get('/', (req, res) => {
//     res.sendFile(
//         path.resolve(__dirname, 'portfolio/index.html')
//         )
// })

// app.listen(3000)

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use('/', express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.post('/data', (req, res) => {
    console.log(req.body)
    res.json({status: 'ok',
body: req.body})
})

app.listen(1231)
