require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Cennected to DB'))

app.use(express.json())

const sparkRouter = require('./routes/spark')
app.use('/spark', sparkRouter)
 
app.listen(3000, () => console.log('server started'))