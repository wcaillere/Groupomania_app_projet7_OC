//Imports package, controller, and creates the router
const express = require('express')
const postsCtrl = require('../controllers/posts')
const multer = require('../middleware/multer-config')
const router = express.Router();

//routes
router.get('/', postsCtrl.getAllPosts)
router.get('/:id', postsCtrl.getOnePost)
// router.post('/', multer, postsCtrl.createOnePost)
// router.put('/:id', multer, postsCtrl.modifyOnePost)
router.delete('/:id', postsCtrl.deleteOnePost)
router.post('/:id/like', postsCtrl.manageLike)

module.exports = router;