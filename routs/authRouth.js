const express = require('express');
const authController = require('../controllers/AuthController')
const {
    protect
} = require('../midlewares/auth')
const router = express.Router();
router.post('/signUp', authController.registerUser)
router.post('/signIn', authController.loginUser);
router.get('/me', protect, authController.getMe)
module.exports = router