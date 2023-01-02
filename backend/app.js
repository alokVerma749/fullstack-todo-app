require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const todo = require('./routes/todo')
const task = require('./routes/task')

app.use('/todo', todo)
app.use('/todo/task', task)
app.use(cors())

module.exports = app