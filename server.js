const db = require('./db')
const express = require('express')
const PlayerRouter = require('./routes/PlayerRouter')
const LeagueRouter = require('./routes/LeagueRouter')

const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

// ROUTES

app.get('/', (req, res) => {
  res.send('This is the root')
})

app.use('/players', PlayerRouter)
app.use('/leagues', LeagueRouter)

// DB ON

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})
