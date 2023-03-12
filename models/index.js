const { model } = require('mongoose')

const UserSchema = require('./User')
const PlayerSchema = require('./Player')
const LeagueSchema = require('./League')
const TeamSchema = require('./Team')

const User = model('User', UserSchema)
const Player = model('Player', PlayerSchema)
const League = model('League', LeagueSchema)
const Team = model('Team', TeamSchema)

module.exports = {
  User,
  Player,
  League,
  Team,
}
