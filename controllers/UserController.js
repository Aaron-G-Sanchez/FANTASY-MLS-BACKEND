const { User } = require('../models')

const GetUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return req.status(200).json({ user })
    } else {
      return res.status(401).send({ status: 'Error', msg: 'No user that id!' })
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetUser
}
