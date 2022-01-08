const router = require('express').Router()

const {getTasks, postTasks, getSingleTask, patchTask, deleteTask} = require('../controllers/api')

router.get('/', getTasks)

router.post('/', postTasks)

router.get('/:id', getSingleTask)

router.patch('/:id', patchTask)

router.delete('/:id', deleteTask)

module.exports = router