const Todo = require('../../models/todo')

const getTasks = async (req, res) => {
    try {
        const todoId = req.params.todoId;
        const todo = await Todo.findById(todoId)
        if (!todo) {
            res.status(400).json({
                success: false,
                message: "can't find todo"
            })
        }
        res.status(200).json({
            success: true,
            tasks: todo.tasks,
            todoTitle: todo.title
        })
    } catch (error) {
        throw new Error("getTasks error \n " + error.message)
    }

}

module.exports = getTasks