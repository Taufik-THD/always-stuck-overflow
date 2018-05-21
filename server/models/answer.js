const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
  QuestionId: { type:Schema.Types.ObjectId, ref: 'Question' },
  UserId: { type:Schema.Types.ObjectId, ref: 'User' },
  comment: { type:String }
},{
  timestamps: true
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer;
