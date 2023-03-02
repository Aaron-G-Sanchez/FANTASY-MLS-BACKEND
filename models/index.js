const { model } = require('mongoose')

const UserSchema = require('./User')
const PlayerSchema = require('./Player')

const User = model('User', UserSchema)
const Player = model('Player', PlayerSchema)

module.exports = {
  User,
  Player
}
