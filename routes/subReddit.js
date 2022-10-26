const express = require('express');
const router = express.Router();
const  subRedditController  = require('../controllers/subRedditController')
const { auth } = require('../middleware/authMiddleware')

router.post('/subreddit/create', auth, subRedditController.createSubReddit )

module.exports = router;