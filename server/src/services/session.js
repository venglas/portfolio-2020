const Session = require('../models/login/session')

const getSession = async (id) => {
  try {
    const session = await Session.findById(id)
    console.log(id);
    return session
  } catch (err) {
    console.error(err)
  }
}

module.exports = { getSession }