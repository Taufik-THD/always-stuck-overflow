const Question = require('../models/questions')
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports = {

  readQuestions(req, res){

    console.log('read question');

    Question.find({}).populate('UserId').exec(function(err, user) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(user)
      }
    });

  },

  addNewQuestion(req, res){
    const token = req.body.token
    const UserId = jwt.decode(token.slice(1, token.length-1)).id

    const newQuestion = {
      title: req.body.question.title,
      description: req.body.question.detail,
      UserId
    }

    Question.create(newQuestion, function(err, success) {
      if (err) {
        res.status(404).json('bad request')
      } else {
        res.status(201).json('success add user');
      }
    })

  },

  OpenQuestion(req, res){

    const idQuestion = req.params.id

    Question.findOne({
      _id: idQuestion
    }).populate('userId').exec(function(err, data){
      res.status(200).json(data)
    })

  },

  getDetail(req, res){

    const idQuestion = req.params.id

    Question.find({ _id: idQuestion }).populate('UserId').exec(function(err, user) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(user)
      }
    });

  },

  upvote(req, res){

    const token = req.body.token

    const decoded = jwt.decode(token.slice(1, token.length-1), "MYSUPERSECRET")

    Question.find({ _id: req.params.id })
    .then(data => {

      if (data[0].UserId == decoded.id) {

        console.log('dih ngelike punya sendiri');


      } else {

        const votesData = data[0].votes
        let findId = 0

        for (var i = 0; i < votesData.length; i++) {
          if (votesData[i] == decoded.id) {
            findId += 1
          }
        }

        if (!findId) {
          votesData.push(decoded.id)
          data[0].save()
          res.status(200).json({ data })
        }

      }

    })

  },

  downvote(req, res){

    const token = req.body.token

    const decoded = jwt.decode(token.slice(1, token.length-1), "MYSUPERSECRET")

    Question.find({ _id: req.params.id })
    .then(data => {

      if (data[0].UserId == decoded.id) {

        console.log('dih ngelike punya sendiri');


      } else {

        const votesData = data[0].downvotes
        let findId = 0

        for (var i = 0; i < votesData.length; i++) {
          if (votesData[i] == decoded.id) {
            findId += 1
          }
        }

        if (!findId) {
          data[0].downvotes.push(decoded.id)
          data[0].save()
          res.status(200).json({ data })
        }

      }

    })

  }

};
