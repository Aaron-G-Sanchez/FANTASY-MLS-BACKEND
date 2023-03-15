const { Schema } = require('mongoose')

const Team = new Schema(
  {
    name: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    league: { type: Schema.Types.ObjectId, ref: 'League', required: false },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player', required: false }],
    score: { type: Number, default: 0 },
    record: { type: String, default: '0-0' }
  }
)

module.exports = Team