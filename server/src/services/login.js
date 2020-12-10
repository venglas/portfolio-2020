const checkCredentials = (username, password) => {
  const __username = process.env.USERNAME
  const __password = process.env.PASSWORD

  if (username === __username && password === __password) return true
  return false
};

const generateSession = () => {
  const date = new Date().toDateString()
  const random = Math.random()
  const session = `${date}-${random}`

  return session
}

const loginUser = (username, password) => {
  if (checkCredentials(username, password)) {
    return { session: generateSession() }
  }
  return false
}

module.exports = { loginUser }