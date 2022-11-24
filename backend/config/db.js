const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/todoapp')
        .then(console.log('db connected'))
        .catch(error => {
            throw new Error(error.message)
            process.exit(1)
        })
}