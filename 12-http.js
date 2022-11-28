const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about') {
        res.end(`It's about our history`)
        return
    }
    res.end(`
    <h1>Oops !</h1>
<p>It seem you lost !</p>
<a href="/"> Go back home !</a>
    `)
    })

server.listen(5000)