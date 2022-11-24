const Todo = require('../../models/todo')

const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.todoId
        const deletedTodo = await Todo.findByIdAndDelete(todoId)
        res.status(200).json({
            success: true,
            message: "deleted successfully",
            deletedTodo
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = deleteTodo