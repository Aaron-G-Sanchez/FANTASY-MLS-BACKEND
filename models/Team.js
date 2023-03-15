const { Schema } = require('mongoose')
const User = require('./User')
const League = require('./League')
const Player = require('./Player')

const Team = new Schema(
  {
    name: { type: String, required: true },
    creator: User,
    league: League,
    players: [Player],
    score: { type: Number, default: 0 },
    record: { type: String, default: '0-0' }
  }
)

module.exports = Team