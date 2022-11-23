const Todo = require('../models/todo')
exports.createTodo = async (req, res) => {
    try {
        if (req.body === "") {
            return res.status(500).json({
                success: false,
                message: "title field is required"
            })
        }
        const newTodo = new Todo({
            title: req.body.title
        })
        const createdNewTodo = await newTodo.save()
        res.status(200).json(createdNewTodo)
    } catch (error) {
        throw new Error(error.message)
    }

}
exports.deleteTodo = (req, res) => {
    try {

    } catch (error) {

    }
}
exports.editTodo = (req, res) => {
    try {

    } catch (error) {

    }
}
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        console.log(todos)
        if (!todos) {
            res.status(400).json({
                success: true,
                message: "no todo find"
            })
        }
        res.status(200).json({
            todos
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.getTodo = (req, res) => {
    try {

    } catch (error) {

    }
}