const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about') {
        // BLOCKING CODE !!!!
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`);
            }
            
        }
        res.end('About page')
        return
    }
})

server.listen(5000, () => {
    console.log('Server listening on port 5000...');
})