const Todo = require('../../models/todo')

const editTodo = async (req, res) => {
    try {
        const { todoId } = req.params
        const todo = await Todo.findByIdAndUpdate(todoId, req.body.title)
        console.log(todo)
        res.status(200).json({
            success: true,
            message: "title renamed"
        })
    } catch (error) {
        throw new Error("editTodo error \n " + error.message)
    }
}

module.exports = editTodo