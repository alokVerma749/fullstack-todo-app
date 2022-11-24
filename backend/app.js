require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const user = require('./routes/user')
const todo = require('./routes/todo')
const task = require('./routes/task')

app.use('/user', user)
app.use('/todo', todo)
app.use('/todo/task', task)

module.exports = app