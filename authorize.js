const authorize = (req,res,next) => {
    console.log('authorised')
    next()
}

module.exports = authorize