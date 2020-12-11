if (process.env.ENV === 'local') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(`${process.env.DB_URL}/portfolio`, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('database connected'))

app.use(express.json())
app.use(cors())

const mailRouter = require('./src/routes/mails/mail')
const loginRouter = require('./src/routes/login/login')
app.use('/mail', mailRouter)
app.use('/login', loginRouter)

const port = 3000;

app.listen(port, () => console.log(`server started at port: ${port}`))
