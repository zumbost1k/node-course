const jwt = require('jsonwebtoken')
const {secret} = require('../config')


module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            //get an jwt token from header
            const token = req.headers.authorization.split(' ')[1]
            //if it dont exist send en error
            if (!token) {
                return res.status(403).json({message: "user unauthorized"})
            }
            //encrypt token use {roles: userRoles} because we have rolles in relative function as a parametr
            const {roles: userRoles} = jwt.verify(token, secret)
            let hasRole = false
            //checking if there is an authorised role
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(403).json({message: "do not have permission to use this method"})
            }
            next();
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "user unauthorized"})
        }
    }
};