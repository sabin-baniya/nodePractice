const {createReadStream, readFileSync} = require('fs')

const stream = createReadStream('./big-file.txt', {encoding: 'utf8'})

stream.on('data', (chunk ) => {
    console.log(chunk)
})