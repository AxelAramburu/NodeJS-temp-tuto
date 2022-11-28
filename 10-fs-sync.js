const { readFileSync, writeFileSync } = require('fs')

// We can make like this
// const fs = require('fs')
// fs.readFileSync

// Read files
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

// Write a file
writeFileSync(
    './content/result-sync.txt',
    `Hello is the result ${first}, ${second}`,
    // flag is use for write after the existing text, if you don't use flag, it's overwrite the file
    { flag: 'a' }
)