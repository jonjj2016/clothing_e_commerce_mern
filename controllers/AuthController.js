const User = require('../models/User');
const sendTokenResponse = (user, statusCode, res) => {
    const token = user.generateToken()
    console.log("this is token")
    res.status(statusCode).json({
        status: "Success",
        token
    })
}
const sendErrorResponse = (err, statusCode = 500, res) => {
        res.status(statusCode).json({
            status: "Fail",
            msg: err.message
        })
    }
    //@desk Register User
    //@route POST /api/v1/auth/signUp 
    //@access Public
exports.registerUser = async(req, res, next) => {

    try {
        const {
            email,
            name,
            password
        } = req.body
        const body = {
            email,
            name,
            password
        }

        const user = await User.create(body)
        sendTokenResponse(user, 200, res)

    } catch (err) {
        sendErrorResponse(err, 400, res);
    }
};
//@desk Login User
//@route POST /api/v1/auth/signIn 
//@access Public
exports.loginUser = async(req, res, next) => {
        // fetch email and password from req.body object
        const {
            email,
            password
        } = req.body
            //check for email and password existence
        if (!email || !password) {
            res.status(401).json({
                status: "Fail",
                msg: "Please Provide email and Password"
            })
        }
        //check for user

        const user = await User.findOne({
            email
        }).select("+password")
        if (!user) {

            res.status(401).json({
                status: "Fail",
                msg: "Invalid Credentials"
            })
        }

        try {

            const matchPassword = await user.matchPassword(password)
                //check for pssword match
            if (!matchPassword) {
                //send error message if password doesn't mastch
                res.status(401).json({
                    status: "Success",
                    msg: "Invalid Credentials"
                })
            }
            sendTokenResponse(user, 200, res)
        } catch (err) {
            sendErrorResponse(err, 401, res)
        }


    }
    //@desk Fetching Users data
    //@route GET /api/v1/auth/me 
    //@access Private
exports.getMe = async(req, res, next) => {
    try {
        const user = req.user
        res.status(200).json({
            status: "Success",
            user
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            err
        })
    }
}