const Todo = require('../../models/todo')

const getTodos = async (req, res) => {
    try {
        const allTodos = await Todo.find()
        if (allTodos.length < 0) {
            res.status(500).json({
                success: false,
                message: "no todo found"
            })
        }
        res.status(200).json({
            success: true,
            allTodos
        })
    } catch (error) {
        throw new Error("getTodos error \n " + error.message)
    }
}

module.exports = getTodos