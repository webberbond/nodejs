import EventEmitter from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('myEvent', () => {
    console.log('First event listener')
})

myEmitter.on('myEvent', () => {
    console.log('Second event listener')
})

myEmitter.on('otherEvent', () => {
    console.log('Third Event')
})

setTimeout(() => myEmitter.emit('myEvent'), 1000)

myEmitter.setMaxListeners(25)
console.log(myEmitter.eventNames())
console.log(myEmitter.getMaxListeners())
