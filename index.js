require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('<h1>user is required to login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Chai aur backend</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})