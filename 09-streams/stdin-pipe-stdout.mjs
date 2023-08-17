import { Transform } from 'stream'
import fs from 'fs'

// // Pipe to file
// const filePath = './files/stdin-dump.txt'
// const writeStream = fs.createWriteStream(filePath)
// process.stdin.pipe(writeStream)

// // Pipe to stdout
// process.stdin.pipe(process.stdout)

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase()
        callback(null, upperCased)
    },
})

const reverseStream = new Transform({
    transform: function (chunk, encoding, callback) {
        const arrayOfChars = chunk.toString().split('')
        const last_char = arrayOfChars.pop()
        const reverseCased = arrayOfChars.reverse().concat(last_char).join('')
        callback(null, reverseCased)
    },
})

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout)
