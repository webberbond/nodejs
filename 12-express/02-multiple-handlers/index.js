const express = require('express')

const app = express()

const firstHandler = (req, res, next) => {
    console.log('First Handler')
    next()
}

const secondHandler = (req, res) => {
    console.log('Second Handler')
    res.send('Response From Express')
}

app.get('/', firstHandler, secondHandler)

app.listen(5000, () => console.log('Server was started on port 5000'))
