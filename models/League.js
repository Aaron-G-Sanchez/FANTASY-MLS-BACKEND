const { Schema } = require('mongoose')

const League = new Schema(
  {
    name: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User', required: false }],
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team', required: false }]
  },
  { timestamps: true }
)

module.exports = League