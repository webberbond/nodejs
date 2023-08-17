const path = require('path')

const filePath = '/Users/oson/Desktop/Node.js/index.js'
const textPath = '/Users/oson/Desktop/file.txt'
const relativePath = './Node.js/movie.mov'
const directoryPath = './Node.js/subfolder'

console.log(path.isAbsolute(filePath)) // true
console.log(path.isAbsolute(relativePath)) // false

console.log(path.basename(filePath)) // index.js
console.log(path.basename(directoryPath)) // subfolder

console.log(path.dirname(filePath)) // /Users/oson/Desktop/Node.js
console.log(path.dirname(directoryPath)) // ./Node.js

console.log(path.resolve(relativePath)) // /Users/oson/Desktop/Node.js/Node.js/movie.mov

console.log(path.extname(textPath)) // .txt
console.log(path.extname(directoryPath)) // empty string

console.log(path.parse(filePath))

const parsedPath = path.parse(filePath)
console.log(filePath) // /Users/oson/Desktop/Node.js/index.js
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)) // /Users/oson/Desktop/Node.js/renamed-index.mjs
