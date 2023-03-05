const { Player } = require('../models')

const GetAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()
    return res.status(200).json({ players })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllPlayers
}
