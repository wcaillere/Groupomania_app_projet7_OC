//Imports package, controller, and creates the router
const express = require('express')
const postsCtrl = require('../controllers/posts')
const router = express.Router();
const multer = require('../middleware/multer-config')

//routes
router.get('/', postsCtrl.getAllPosts)
router.get('/:id', postsCtrl.getOnePost)
// router.post('/', multer, postsCtrl.createOnePost)

module.exports = router;