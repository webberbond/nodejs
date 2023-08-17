import http from 'http'
import fs from 'fs'
import qs from 'querystring'

const PORT = 5000
const filePath = '/Users/oson/Desktop/Node.js/09-streams/files/index.html'

const server = http.createServer((req, res) => {
    // With streams
    if (req.url === '/' && req.method === 'GET') {
        const readStream = fs.createReadStream(filePath)

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        readStream.pipe(res)
    }
    // Without streams. We read entire file and then send it to the client
    if (req.url === '/no-stream' && req.method === 'GET') {
        const readStream = fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('Error reading file on server')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
})

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})
