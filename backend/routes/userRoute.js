const express = require('express');
const { register, login, userProfile } = require('../controllers/userControllers');
const { auth } = require('../auth/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/register', upload.single('image'), register);
router.post('/login', login);
router.get('/profile', auth, userProfile)

module.exports = router;