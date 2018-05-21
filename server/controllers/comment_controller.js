const Question = require('../models/questions')
const User = require('../models/user')
const Answer = require('../models/answer')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports = {

  getComment(req, res){
    Answer.find({
      QuestionId: req.params.id
    }).populate('UserId').exec().then(data => {
      res.status(200).json({ data })
    })
  },

  addComment(req, res){

    const token = req.body.token
    const UserId = jwt.decode(token.slice(1, token.length-1)).id

    const newComment = {
      QuestionId: req.params.id,
      comment: req.body.comment,
      UserId
    }

    Answer.create(newComment, function (err, success) {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json("success")
      }
    })

  }

};
