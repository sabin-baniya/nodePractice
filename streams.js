const {createReadStream, readFileSync} = require('fs')
const http = require('http')

const stream = createReadStream('./big-file.txt', {encoding: 'utf8'})

// stream.on('data', (chunk ) => {
//     console.log(chunk)
// })

http.createServer((req,res) => {
    // const text = readFileSync('./big-file.txt', 'utf8');
    
    const stream = createReadStream('../big-file.txt', 'utf8');
    stream.on('open', () => {
        stream.pipe(res)
    })
    stream.on('error', (err) => {
        // res.write(err)
    })
    // res.end(text)
}).listen(5000)