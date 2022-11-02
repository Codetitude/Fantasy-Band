const logger = require('morgan')
const express = require('express')
const routes = require('./routes')
const db = require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

app.use(express.json())

app.use(logger('dev'))

app.use(express.static(`${__dirname}/client/build`))

app.use(express.urlencoded({ extended: true }))

app.use('/musicians', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
