const {readFile} = require('fs')

function getText(path){
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) reject(err)
            else{
                resolve(data)
            }
        })
    })
}

getText('./public/hello.txt').then(res => console.log(res)).catch(err => console.log(err))