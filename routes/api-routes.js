var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController');
const postController = require('../controllers/postController');



// user auth routes
router.post("/login", authController.logIn);

// post routes
router.post("/post", postController.addPost);
router.put("/post", postController.editPost);
router.get("/post", postController.getPosts);
router.delete("/post", postController.removePost);
router.post("/comment", postController.addComment);



module.exports = router;