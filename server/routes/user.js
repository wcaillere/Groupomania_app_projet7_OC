//Imports package, controller, and creates the router
const express = require('express')
const userCrtl = require('../controllers/user')
const router = express.Router();

//routes
router.get('/signup', userCrtl.signup)

module.exports = router;