const express = require('express')
const router = express.Router()

const rootHandler = require('./root')
const commentsRouter = require('./comments')
const usersRouter = require('./users')

router.use('/', rootHandler)
router.use('/comments', commentsRouter)
router.use('/users', usersRouter)

module.exports = router
