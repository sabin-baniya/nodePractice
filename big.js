const {writeFileSync} = require('fs')

for(i=0; i<100000000;i++){
    writeFileSync('./big-file.txt', `${i}th iteration`, {flag: 'a'})
}

console.log('Done')