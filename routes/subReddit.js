const express = require('express');
const router = express.Router();
const  subRedditController  = require('../controllers/subRedditController')
const { auth } = require('../middleware/authMiddleware')

router.post('/create', auth, subRedditController.createSubReddit )
router.put('/update/:id', auth, subRedditController.updateSubReddit)
router.get('/redits', subRedditController.getRedits)
module.exports = router;