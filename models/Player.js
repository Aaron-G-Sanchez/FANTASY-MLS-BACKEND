const { Schema } = require('mongoose')

const Player = new Schema(
  {
    name: { type: String, required: true },
    commonName: { type: String, required: true },
    position: { type: String, required: true },
    number: { type: Number, required: true },
    team: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Player