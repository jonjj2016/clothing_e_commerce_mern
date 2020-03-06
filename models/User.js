const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required "]
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password shoul be at least 6 charachters"],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// CRYPT PASSWORD BEFORE SAVING TO DB
UserSchema.pre('save', async function(next) {
        if (!this.isModified('password')) {
            next()
        }
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next()
    })
    // GENERATE TOKEN AND RETURN
UserSchema.methods.generateToken = function() {
    return jwt.sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    })
}
UserSchema.methods.matchPassword = async function(inputPassword) {
    return await bcrypt.compare(inputPassword, this.password)
}


module.exports = mongoose.model('User', UserSchema);