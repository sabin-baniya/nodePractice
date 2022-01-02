// const http = require('http')

// const server = http.createServer((req, res)=> {
//     res.write('Hello World')
//     res.end();
// })

// server.listen('3000', ()=> {
//     console.log('Server listening on port 3000')
// })

const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(3000)