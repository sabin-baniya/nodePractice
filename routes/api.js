const router = require('express').Router()

const {postPeople, getPeople, putPeople, deletePeople} = require('../controllers/people')

router.post('/', postPeople)
router.put('/:id', getPeople)
router.delete('/', putPeople)
router.get('/', deletePeople)

module.exports = router