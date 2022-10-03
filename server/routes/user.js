//Imports package, controller, and creates the router
const express = require('express')
const userCrtl = require('../controllers/user')
const router = express.Router();

//routes
router.post('/signup', userCrtl.signup)
router.post('/login', userCrtl.login)

module.exports = router;