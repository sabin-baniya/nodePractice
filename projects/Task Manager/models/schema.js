const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Is Required'],
        maxlength: [20, 'Cannot exceed limit of 20 char'],
        trim: true 
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)