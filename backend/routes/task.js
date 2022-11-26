const express = require('express')
const router = express.Router()

const createTask = require('../controllers/TaskControllers/createTask')
const deleteTask = require('../controllers/TaskControllers/deleteTask')
const editTask = require('../controllers/TaskControllers/editTask')
const getTask = require('../controllers/TaskControllers/getTask')
const getTasks = require('../controllers/TaskControllers/getTasks')

router.post('/createtask:todoId', createTask)
router.delete('/deletetask:todoId/:taskString', deleteTask)
router.post('/edittask:todoId', editTask)
router.get('/gettasktask:todoId', getTask)
router.get('/getalltasks:todoId', getTasks)

module.exports = router