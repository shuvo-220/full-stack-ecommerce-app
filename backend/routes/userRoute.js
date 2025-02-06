const express = require('express');
const { register, login, userProfile } = require('../controllers/userControllers');
const { auth } = require('../auth/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, userProfile)

module.exports = router;