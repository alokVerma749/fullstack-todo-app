const Todo = require('../../models/todo')

const deleteTask = async (req, res) => {
    try {
        const { todoId, taskString } = req.params
        const todo = await Todo.findById(todoId)
        if (!todo) {
            return res.status(400).json({
                sucess: false,
                message: "task not found"
            })
        }
        if (!taskString) {
            return res.status(400).json({
                sucess: false,
                message: "task not found"
            })
        }
        todo.tasks.pull(taskString)
        todo.save()
        res.status(200).json({
            sucess: true,
            message: "task deleted successfully"
        })
    } catch (error) {
        throw new Error("deleteTask error: " + error.message)
    }

}


module.exports = deleteTask