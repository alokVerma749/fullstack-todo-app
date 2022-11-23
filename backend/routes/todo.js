const express = require('express')
const router = express.Router()

const { createTodo, editTodo, deleteTodo, getTodo, getTodos } = require('../controllers/todo')

router.post('/create', createTodo)
router.get('/edit', editTodo)
router.get('/delete', deleteTodo)
router.get('/gettodo', getTodo)
router.get('/gettodos', getTodos)

module.exports = router