const express = require('express')
const router = express.Router()

const createTodo = require('../controllers/TodoControllers/createTodo')
const deleteTodo = require('../controllers/TodoControllers/deleteTodo')
const editTodo = require('../controllers/TodoControllers/editTodo')
const getTodo = require('../controllers/TodoControllers/getTodo')
const getTodos = require('../controllers/TodoControllers/getTodos')

router.post('/createtodo', createTodo)
router.delete('/deletetodo:todoId', deleteTodo)
router.put('/edittodo:todoId', editTodo) //Not Working
router.get('/gettodo:todoId', getTodo)
router.get('/getalltodos', getTodos)

module.exports = router