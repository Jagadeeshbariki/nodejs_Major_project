const express = require('express');

const router = express.Router();
const userConstroll = require('../controllers/users_controller');

router.get('/profile', userConstroll.profile);


module.exports = router;