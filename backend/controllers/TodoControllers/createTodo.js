const Todo = require('../../models/todo')

const createTodo = async (req, res) => {
    try {
        if (req.body.title === "") {
            res.status(500).json({
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
        throw new Error("createTodo error \n " + error.message)
    }
}

module.exports = createTodo