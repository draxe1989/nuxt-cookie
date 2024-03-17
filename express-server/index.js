const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
app
.use(cors({credentials: true, origin: 'http://localhost:3000'}))
.use(cookieParser())

const port = 4000

let counter = 0

app.get('/get', (req, res) => {
    console.log('get');
  res
    .status(200)
    .json(req.cookies)
})

app.get('/get-cookie', (req, res) => {
  res
    .status(200)
    .cookie('COOKIEEEEES', 'COOKIEEEEES' + counter++, { domain: 'localhost', httpOnly: true })
    .json(req.cookies)

    console.log('get-cookie', counter);
})

app.get('/clear-cookie', (req, res) => {
  console.log('clear-cookie');
res
  .status(200)
  .clearCookie('COOKIEEEEES', { domain: 'localhost', httpOnly: true })
  .json(req.cookies)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})