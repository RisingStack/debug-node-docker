const http = require('http')
const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
  res.write('Hello, World!')
  res.end()
}).listen(PORT, (err) => {
  if (err) {
    throw err
  }
  console.log('server is listening at', PORT )
})
