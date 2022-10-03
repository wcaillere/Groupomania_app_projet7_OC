//Imports package, controller, and creates the router
const express = require('express')
const postsCtrl = require('../controllers/posts')
const router = express.Router();

//routes
router.get('/', postsCtrl.getAllPosts)

module.exports = router;