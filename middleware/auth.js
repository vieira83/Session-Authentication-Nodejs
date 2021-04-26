const checkAuth = (req, res, next) => {
    if(!req.session || !req.session.user){
        const error = new Error('You need to login first')
        error.statusCode = 401
        next(error)
    }
    next()
}

module.exports = checkAuth