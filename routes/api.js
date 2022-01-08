const router = require('express').Router()

let { people } = require('../data')


router.post('/', (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, data: []})
    }else{
        return res.status(201).json({success: true, person: name})
    }
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find(pep => pep.id === parseInt(id))

    const newPeople = people.map((person) => {
        if(person.id === parseInt(id)){
            person.name = name
        }
        return person
    })

    if(person){
        return res.status(200).send({success: true, data: newPeople})
    }

    return res.status(400).json({success: false, data: 'Doesn\'t exist'})
})


router.delete('/', (req, res) => {
    
})

router.get('/', (req, res) => {
    res.status(200).json({people})
})

module.exports = router