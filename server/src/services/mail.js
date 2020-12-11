const checkApplicationID = applicationID => {
  if (applicationID === process.env.APPLICATION_ID) return true
  return false
};

module.exports = { checkApplicationID } 