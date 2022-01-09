const Tasks = require('../models/schema')
const asyncHandler = require('../middlewares/async-handler')

const getTasks = asyncHandler (async (req, res) => {
    const tasks = await Tasks.find({})
    res.status(200).json({tasks})    
})

const postTasks = asyncHandler( async (req, res) => {
    const task = await Tasks.create(req.body)
    res.status(201).send(task)
})

const getSingleTask = asyncHandler( async (req, res) => {
    const {id:TaskID} = req.params
    const task = await Tasks.findOne({_id:TaskID})

    if(!task){
            return res.status(404).json({msg: `No such task with id ${id}`})
    }

    res.status(200).json({task})
})

const patchTask = asyncHandler( async (req, res) => {
    const {id: taskID} = req.params
    const task = await Tasks.findOneAndUpdate({_id: taskID}, req.body, { new: true, runValidators: true})

    if(!task){
        return res.status(404).json({msg: `No such task with id ${id}`})
    }

    res.status(200).json({task})
})

const deleteTask = asyncHandler( async (req, res) => {
    const {id:TaskID} = req.params
    const task = await Tasks.findOneAndDelete({_id:TaskID})

    if(!task){
        return res.status(404).json({msg: `No such task with id ${id}`})
    }

    res.status(200).json({task})
})

module.exports = {
    getTasks,
    postTasks,
    getSingleTask,
    patchTask,
    deleteTask
}