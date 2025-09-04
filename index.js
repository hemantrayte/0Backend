const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/twitter', (req, res) => {
  res.send('hemant rayte')
})

app.get("/login", (req, res) => {
  res.send('<h1>please log in || hemant rayte</h2>')
})

app.get("/signup", (req, res) => {
  res.send('<h1>please sign in || hemant rayte</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})