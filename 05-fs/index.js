const fs = require('fs')

fs.writeFile('./first.txt', 'First file text', (err) => {
    if (err) console.log(err)
    else {
        console.log('First file was written')
        fs.appendFile('./first.txt', '\nOne more line', (err) => {
            if (err) console.log(err)
            else {
                console.log('Appended text to the file')
                fs.rename('./first.txt', './renamed.txt', (err) => {
                    if (err) console.log(err)
                    else console.log('File was renamed')
                })
            }
        })
    }
})
