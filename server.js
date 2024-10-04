const http = require('http')
const websocket = require('ws')

const server = http.createServer((req, res) => {
    res.end('Hello from Node.js')
})

const wss = new websocket.WebSocketServer({ server })

wss.on('headers', (headers, req) => {
    console.log(headers)
})

wss.on('connection', (ws, req) => {
    // console.log('ws', ws)

    ws.send('Hello from websocket server')
    ws.on('message', (message) => {
        console.log(message.toString())
    })
})

server.listen(8000)