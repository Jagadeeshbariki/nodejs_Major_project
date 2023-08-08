const express = require('express');

const router = express.Router();
const userControll = require('../controllers/users_controller');

router.get('/profile', userControll.profile);

// Signup page
router.get('/sign-up', userControll.signUp);

// SingIn page

router.get('/sign-in', userControll.sigIn);

router.post('/creat', userControll.creat);
module.exports = router;