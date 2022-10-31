/** @format */

//Imports packages, controller, and creates the router
const express = require("express");
const userCrtl = require("../controllers/user");
const rateLimit = require("../middleware/rateLimit");
const router = express.Router();

//routes
router.post("/signup", rateLimit.signupLimiter, userCrtl.signup);
router.post("/login", rateLimit.loginLimiter, userCrtl.login);

module.exports = router;
