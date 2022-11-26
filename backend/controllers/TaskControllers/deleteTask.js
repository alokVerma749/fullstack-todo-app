const Todo = require('../../models/todo')

const deleteTask = async (req, res) => {
    try {
        const { todoId, taskString } = req.params
        const todo = await Todo.findById(todoId)
        if (!todo) {
            console.log('todo in not present')
            return res.status(400).json({
                sucess: false,
                message: "task not found"
            })
        }
        if (!taskString) {
            console.log('task in not present')
            return res.status(400).json({
                sucess: false,
                message: "task not found"
            })
        }
        console.log(taskString + " is deleted")
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