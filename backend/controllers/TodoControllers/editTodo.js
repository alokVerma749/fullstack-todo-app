const Todo = require('../../models/todo')

const editTodo = async (req, res) => {
    try {
        const todoId = req.params.todoId
        console.log(req.body)
        const todo = await Todo.findByIdAndUpdate(todoId, req.body.data)
        console.log(todo)
    } catch (error) {
        throw new Error("editTodo error \n " + error.message)
    }
}

module.exports = editTodo