const express = require('express')
const router = express.Router()

const { createTask, editTask, deleteTask, getTask, getTasks } = require('../controllers/task')

router.get('/create', createTask)
router.get('/edit', editTask)
router.get('/delete', deleteTask)
router.get('/gettask', getTask)
router.get('/gettasks', getTasks)

module.exports = router