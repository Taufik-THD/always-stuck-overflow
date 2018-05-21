const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: { type:String },
  description: { type:String },
  UserId: { type:Schema.Types.ObjectId, ref:'User' },
  votes: [],
  downvotes: []
},{
  timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question;
