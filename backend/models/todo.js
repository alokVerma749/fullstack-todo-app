const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: {
        type: [String]
    }
})

module.exports = mongoose.model("Todo", todoSchema)