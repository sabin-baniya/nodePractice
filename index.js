const {readFileSync, writeFileSync} = require('fs')

const htmlText = readFileSync('./public/index.html', 'utf-8')

writeFileSync('./public/hello.txt', 'Hello World')

console.log(htmlText);