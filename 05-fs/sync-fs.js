const fs = require('fs')

try {
    fs.writeFileSync('./first.txt', 'First file text')
    console.log('File was created')
    fs.appendFileSync('./first.txt', '\nOne more line')
    console.log('Appended text to the first.txt')
    fs.renameSync('./first.txt', './renamed.txt')
    console.log('File was renamed')
} catch (error) {
    console.log(error)
}
