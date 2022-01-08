const authorize = (req,res,next) => {
    if(req.query.name === 'jhon'){
        req.user = {
            name: 'jhon',
            id: 3
        }
        next()
    }else{
        res.status(401).send('Unauthorised')
        next();
    }
}

module.exports = authorize