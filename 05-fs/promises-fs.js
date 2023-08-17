const fs = require('fs/promises')

fs.writeFile('./first.txt', 'First file text')
    .then(() => console.log('File was created'))
    .then(() => fs.appendFile('./first.txt', '\nOne more line'))
    .then(() => console.log('Appended text to the first.txt'))
    .then(() => fs.rename('./first.txt', './renamed.txt'))
    .then(() => console.log('File was renamed'))
    .catch((err) => console.log(err))
