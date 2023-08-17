import fs from 'fs'
import EventEmitter from 'events'

const fileEmitter = new EventEmitter()
const filePath = './first.txt'

fileEmitter.on('writeComplete', () => {
    console.log('Finished writing to a file')
    fs.appendFile(filePath, '\nOne more line', () => {
        fileEmitter.emit('appendComplete')
    })
})

fileEmitter.on('appendComplete', () => {
    console.log('Finished appending to a file')
    fs.rename(filePath, './renamed.txt', () => {
        fileEmitter.emit('renameComplete')
    })
})

fileEmitter.on('renameComplete', () => {
    console.log('Finished renaming file')
})

fs.writeFile(filePath, 'First file text', () => {
    fileEmitter.emit('writeComplete')
})
