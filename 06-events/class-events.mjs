import EventEmitter from 'events'
import e from 'express'

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likesQty = 0
        this.on('likePost', (username) => {
            console.log(`${username} liked your post!`)
        })

        this.on('error', (error) => {
            console.error(error)
        })
    }

    like(username) {
        if (!username) {
            return this.emit(
                'error',
                new Error('No username in the like request')
            )
        }
        this.likesQty += 1
        this.emit('likePost', username)
    }
}

const myPost = new Post('Sergey', 'My Great Post')

//
myPost.like('alice')
setTimeout(() => myPost.like(), 2000)
//
