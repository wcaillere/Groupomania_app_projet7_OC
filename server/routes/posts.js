/** @format */

//Imports package, controller, and creates the router
const express = require("express");
const postsCtrl = require("../controllers/posts");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sharp = require("../middleware/sharp");
const router = express.Router();

//routes
router.get("/", auth, postsCtrl.getAllPosts);
router.get("/:id", auth, postsCtrl.getOnePost);
router.post("/", auth, multer, sharp, postsCtrl.createOnePost);
router.put("/:id", auth, multer, sharp, postsCtrl.modifyOnePost);
router.delete("/:id", auth, postsCtrl.deleteOnePost);
router.put("/:id/like", auth, postsCtrl.manageLike);

module.exports = router;
