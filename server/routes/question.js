var express = require('express');
var router = express.Router();
const { readQuestions, addNewQuestion, OpenQuestion, getDetail, upvote, downvote } = require('../controllers/question_controller');

router.post('/', readQuestions)

router.post('/', addNewQuestion)

router.get('/:id', OpenQuestion)

router.get('/detail/:id', getDetail)

router.post('/detail/upvote/:id', upvote)

router.post('/detail/downvote/:id', downvote)

module.exports = router;
