const fs = require('fs')
const https = require('https')

const options = {
  key: fs.readFileSync('cert/server.key'),
  cert: fs.readFileSync('cert/server.crt')
}

https.createServer(options, (req, res) => {
  res.writeHead(200)
  res.end('Hello world!\n')
}).listen(443)
