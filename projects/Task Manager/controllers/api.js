const Tasks = require('../models/schema')

const getTasks = (req, res) => {
    
}

const postTasks = async (req, res) => {
    const task = await Tasks.create(req.body)
    res.status(201).send(task)
}

const getSingleTask = (req, res) => {
    res.send('Hello there')
}

const patchTask = (req, res) => {
    res.send('Hello there')
}

const deleteTask = (req, res) => {
    res.send('Hello there')
}

module.exports = {
    getTasks,
    postTasks,
    getSingleTask,
    patchTask,
    deleteTask
}