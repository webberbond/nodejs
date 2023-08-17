const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const comments = require('./data')

function getHome(req, res) {
    fs.readFile(
        '/Users/oson/Desktop/Node.js/08-http/files/comment-form.html',
        (err, data) => {
            if (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/plain')
                res.end('Server error while loading HTML file')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        }
    )
}

function getHtml(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1>Greeting from http server</h1>')
    res.write('</html></body></div>')
    return res.end()
}

function getNotFound(req, res) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Page not found</h1>')
}

function getText(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('This is plain text')
}

function getComments(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(comments))
}

function postComment(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', (chunk) => {
            try {
                const comment = qs.parse(body)
                comment.id = parseInt(comment.id)
                comments.push(comment)
                res.statusCode = 200
                res.end('Comment data was received')
            } catch (error) {
                res.statusCode = 400
                res.end('Invalid Form data')
            }
        })
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = ''
        req.on('data', (chunk) => (commentJSON += chunk))

        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON))
                res.statusCode = 200
                res.end('Comment data was received')
            } catch (error) {
                res.statusCode = 400
                res.end('Invalid JSON')
            }
        })
    } else {
        res.statusCode = 400
        res.end('Data must be in a JSON format or as a form')
    }
}

module.exports = {
    getHtml,
    getText,
    getNotFound,
    getComments,
    postComment,
    getHome,
}
