const express = require('express');
const router = express.Router();
const { getComment, addComment } = require('../controllers/comment_controller');

router.get('/:id', getComment )

router.post('/:id', addComment )

module.exports = router;
