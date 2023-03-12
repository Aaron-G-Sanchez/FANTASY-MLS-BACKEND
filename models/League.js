const { Schema } = require('mongoose')
const User = require('./User')
const Team = require('./Team')

const League = new Schema(
  {
    name: { type: String, required: true },
    creator: User,
    members: [User],
    teams: [Team]
  },
  { timestamps: true }
)

module.exports = League