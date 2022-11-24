const Todo = require('../../models/todo')

const createTask = async (req, res) => {
    try {
        const todoId = req.params.todoId
        const todo = await Todo.findById(todoId)
        // if TODO is not present
        if (!todo) {
            return res.status(400).send('No todo exists')
        }
        const task = req.body.text
        // if TASK is empty
        if (task === "") {
            return res.status(501).send('please enter a task')
        }
        todo.tasks.push(task)
        await todo.save()
        res.json(todo)
    } catch (error) {
        throw new Error("createTask error \n " + error.message)
    }
}

module.exports = createTask