//Imports package, controller, and creates the router
const express = require('express');
const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

//routes
router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.post('/', auth, multer, postsCtrl.createOnePost);
// router.put('/:id', auth, multer, postsCtrl.modifyOnePost)
router.delete('/:id', auth, postsCtrl.deleteOnePost);
router.post('/:id/like', auth, postsCtrl.manageLike);

module.exports = router;
