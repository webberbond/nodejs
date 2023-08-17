const http = require('http')
const {
    getHtml,
    getNotFound,
    getComments,
    postComment,
    getText,
    getHome,
} = require('./handlers')

const PORT = 5000

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res)
    }
    if (req.method === 'GET' && req.url === '/html') {
        return getHtml(req, res)
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res)
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res)
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res)
    }

    getNotFound(req, res)
})

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`)
})
