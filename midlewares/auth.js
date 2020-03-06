const jwt = require('jsonwebtoken')
const User = require('../models/User')
exports.protect = async(req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }
    if (!token) {
        res.status(401).json({
            status: "Fail",
            msg: "NotAuthorized to access this rout"
        })
    }
    //verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next()
    } catch (err) {
        res.status(401).json({
            status: "Fail",
            msg: "Not autherized to access this rout"
        })
    }

}