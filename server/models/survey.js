let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = mongoose.Schema({
  name: {type:String, required:true, minlength:4},
  questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
},{timestamps: true
});
mongoose.model('User', UserSchema);

let QuestionSchema = mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  question: {type: String, required: true},
  option1:  {type: String, required: true},
  option1Likes: {type: Number, required: true, default: 0},
  option2:  {type: String, required: true},
  option2Likes: {type: Number, required: true, default: 0},
  option3:  {type: String, required: true},
  option3Likes: {type: Number, required: true, default: 0},
  option4:  {type: String, required: true},
  option4Likes: {type: Number, required: true, default: 0},
},{timestamps: true
});
mongoose.model('Question', QuestionSchema);
