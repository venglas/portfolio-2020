const mongoose = require('mongoose')

const mailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  applicationID: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Mail', mailSchema)
