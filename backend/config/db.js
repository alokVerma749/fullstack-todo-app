const mongoose = require('mongoose')

exports.connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODBURI)
        console.log('db connected')
    } catch (error) {
        throw new Error(error)
    }
}
