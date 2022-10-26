const express = require('express');
const router = express.Router();
const  postController  = require('../controllers/postController')
const { auth } = require('../middleware/authMiddleware')

router.post('/create', auth, postController.createPost )
router.post('/comment/create', auth, postController.createComment )


module.exports = router;