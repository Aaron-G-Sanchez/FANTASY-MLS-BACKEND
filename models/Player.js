const { Schema } = require('mongoose')

const Player = new Schema(
  {
    displayName: { type: String, required: false },
    commonName: { type: String, required: false },
    position: { type: Number, required: false },
    number: { type: Number, required: false },
    team: { type: String, required: false },
    image: { type: String, required: false },
    rating: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = Player
