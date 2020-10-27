require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('database connected'))

app.use(express.json())

const mailRouter = require('./src/routes/mails/mail')
app.use('/mail', mailRouter)

app.listen(3000, () => console.log(`server started at port: 3000`))
