const express = require('express')
const app = express()

const port = 8080


// Serve static content
app.use( express.static('public') );


app.get('/hello', (req, res) => {
  res.send('This is a test')
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})