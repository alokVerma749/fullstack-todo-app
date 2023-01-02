const Todo = require('../../models/todo')

const getTodo = async (req, res) => {
    try {
        const todoId = req.params.todoId
        const todo = await Todo.findById(todoId)
        if (todo) {
            res.status(200).json({
                success: true,
                todo
            })
        } else {
            res.status(500).json({
                success: false,
                message: "todo not find"
            })
        }
    } catch (error) {
        throw new Error("getTodo error \n " + error.message)
    }
}

module.exports = getTodo