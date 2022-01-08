const router = require('express').Router()

const {postPeople, getPeople, putPeople, deletePeople} = require('../controllers/people')

// router.post('/', postPeople)
// router.get('/:id', getPeople)
// router.put('/', putPeople)
// router.delete('/', deletePeople)

router.route('/').post(postPeople).delete(deletePeople).get(getPeople)
router.route('/:id').get(getPeople)

module.exports = router