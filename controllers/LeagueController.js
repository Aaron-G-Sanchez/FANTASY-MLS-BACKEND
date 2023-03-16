const { League } = require('../models')
const { Team } = require('../models')

const GetLeagues = async (req, res) => {
  try {
    const leagues = await League.find().populate('creator')
    return res.status(200).json({ leagues })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const CreateLeague = async (req, res) => {
  try {
    const { name, creator } = req.body
    const newLeague = new League({
      name,
      creator,
      members: [creator]
    })
    await newLeague.save()
    return res.status(200).json({ newLeague })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetLeagues,
  CreateLeague
}
