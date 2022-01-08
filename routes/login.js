const router = require('express').Router();

router.post('/', (req, res) => {
    const {name} = req.body

    if(name){
        return res.status(200).send(`Hello ${name}`)
    }

    res.status(400).send('No credentials entered')
})

module.exports = router