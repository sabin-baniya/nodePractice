const {writeFile, readFile, write} = require('fs')

readFile('./public/hello.txt', 'utf-8', (err, res) => {
    if(err) console.log(err)
    else{
        console.log(res)
        writeFile('./public/hello-async.txt', res, (error, result) => {
            if(error) console.log(error)
            else{
                console.log(result)
            }
        })
    }
})