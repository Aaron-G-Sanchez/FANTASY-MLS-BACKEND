const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = User
