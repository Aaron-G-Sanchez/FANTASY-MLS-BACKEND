const { Schema } = require('mongoose')

const Player = new Schema(
  {
    displayName: { type: String, required: false },
    commonName: { type: String, required: true },
    position: { type: Number, required: true },
    number: { type: Number, required: true },
    team: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Player
