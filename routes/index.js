const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')
console.log("router is connected to the server")

router.get('/', homeController.home);
router.use('/users', require('./user'));

// For any furter routes access from here
// router.use("/routerName", require("routerFile"))


module.exports = router;