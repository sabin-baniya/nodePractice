const eventEmitter = require('events')

const customEmitter = new eventEmitter();

customEmitter.on('response', (name,id)=> {
    console.log(`Response recieved username: ${name} & id: ${id}`)
})

customEmitter.on('response', ()=> {
    console.log('Response recieved again')
})

customEmitter.emit('response', 'jhon', 45)

// server using events

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Hello from server using events')
})

server.listen(5000)