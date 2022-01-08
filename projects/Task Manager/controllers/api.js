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

const patchTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Tasks.findOneAndUpdate({_id: taskID}, req.body, { new: true, runValidators: true})

        if(!task){
            return res.status(404).json({msg: `No such task with id ${id}`})
        }

        res.status(200).json({task})
    
    } catch (error) {
        console.log(error)
        res.status(500).send('Couldn\'t find task')
    }
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