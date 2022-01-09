const errorHandler = (error, req, res, next ) => {
    res.status(404).send({msg: error})
}

module.exports = errorHandler