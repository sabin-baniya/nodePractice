const Tasks = require('../models/schema')

const getTasks = async (req, res) => {
    try{
        const tasks = await Tasks.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg: error})
    }
    
}

const postTasks = async (req, res) => {
    try {
        const task = await Tasks.create(req.body)
        res.status(201).send(task)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getSingleTask = async (req, res) => {
    try {
        const {id:TaskID} = req.params
        const task = await Tasks.findOne({_id:TaskID})

        if(!task){
            return res.status(404).json({msg: `No such task with id ${id}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const patchTask = (req, res) => {
    res.send('Hello there')
}

const deleteTask = async (req, res) => {
    try {
        const {id:TaskID} = req.params
        const task = await Tasks.findOneAndDelete({_id:TaskID})

        if(!task){
            return res.status(404).json({msg: `No such task with id ${id}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error}) 
    } 
}

module.exports = {
    getTasks,
    postTasks,
    getSingleTask,
    patchTask,
    deleteTask
}