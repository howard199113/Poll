var mongoose = require('mongoose');
var User = mongoose.model("User");
var Question = mongoose.model("Question");

module.exports ={

  register: (req,res)=>{
    console.log("hit register");
    User.find({name: req.body.name}, (err, foundUsers)=>{
      if(foundUsers.length > 0){
        console.log('found an existing user');
        req.session.userId = foundUsers[0]._id;
        res.json(foundUsers[0]);
      }else{
        var newUser = new User(req.body);
        newUser.save((err, savedUser)=>{
          if(err){
            console.log("something went wrong");
            res.json(err);
          }else{
            console.log('registered a new user');
            req.session.userId = savedUser._id;
            console.log(req.session.userId);
            res.json(savedUser);
          }
        })
      }
    })
  },

  getCurrentUser: (req, res)=>{
    console.log('hit getCurrentUser');
    if(req.session.userId != undefined){
      User.findOne({_id: req.session.userId}, (err, loggedUser)=>{
        console.log('found a user in session');
        res.json(loggedUser);
      })
    }else {
      console.log("nobody logged in");
      res.json(err);
    }
  },

  addQuestion: (req, res)=>{
    console.log('hit addQuestion');

    var newQuestion = new Question(req.body);
    newQuestion._user = req.session.userId;
    newQuestion.save((err, savedQuestion)=>{
      if(err){
        console.log('you hit an error');
        res.json(err);
      }else{
        console.log('saved a new question');
        res.json(savedQuestion);
      }
    })
  },

  getAllQuestions: (req,res)=>{
    console.log('hit getAllQuestions');
    Question.find().exec((err, foundQuestions)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      }else{
        console.log('found all listings');
        res.json(foundQuestions);
      }
    })
  },

  getOptions: (req,res)=>{
    console.log('hit getOptions');
    console.log(req.body.qid);
    Question.findOne({_id: req.body.qid}, (err,foundQuestion)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        console.log(foundQuestion);
        res.json(foundQuestion);
      }
    })
  },

  like1: (req, res)=>{
    console.log('hit like1');
    console.log(req.body.qid);
    Question.findOne({_id: req.body.qid}, (err, foundQuestion)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        let updateQuestion = foundQuestion;
        updateQuestion.option1Likes += 1;
        updateQuestion.save((err, updateQuestion)=>{
          if(err){
            console.log(err);
            res.json(err);
          }else{
            console.log('you have voted for option1');
            res.json(updateQuestion);
          }
        })
      }
    })
  },

  like2: (req, res)=>{
    console.log('hit like2');
    console.log(req.body.qid);
    Question.findOne({_id: req.body.qid}, (err, foundQuestion)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        let updateQuestion = foundQuestion;
        updateQuestion.option2Likes += 1;
        updateQuestion.save((err, updateQuestion)=>{
          if(err){
            console.log(err);
            res.json(err);
          }else{
            console.log('you have voted for option2');
            res.json(updateQuestion);
          }
        })
      }
    })
  },

  like3: (req, res)=>{
    console.log('hit like3');
    console.log(req.body.qid);
    Question.findOne({_id: req.body.qid}, (err, foundQuestion)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        let updateQuestion = foundQuestion;
        updateQuestion.option3Likes += 1;
        updateQuestion.save((err, updateQuestion)=>{
          if(err){
            console.log(err);
            res.json(err);
          }else{
            console.log('you have voted for option3');
            res.json(updateQuestion);
          }
        })
      }
    })
  },

  like4: (req, res)=>{
    console.log('hit like4');
    console.log(req.body.qid);
    Question.findOne({_id: req.body.qid}, (err, foundQuestion)=>{
      if(err){
        console.log(err);
        res.json(err);
      }else{
        let updateQuestion = foundQuestion;
        updateQuestion.option4Likes += 1;
        updateQuestion.save((err, updateQuestion)=>{
          if(err){
            console.log(err);
            res.json(err);
          }else{
            console.log('you have voted for option4');
            res.json(updateQuestion);
          }
        })
      }
    })
  },

  delete: (req,res)=>{
    console.log('hit delete');
    console.log(req.body.qid);
    Question.remove({_id: req.body.qid}, (err, deletedQuestion)=>{
      if(err){
        res.json(err);
      }else{
        res.json(deletedQuestion);
      }
    })
  },

  logout: (req, res)=>{
    console.log('hit logOut');
    if(req.session.userId != undefined){
      req.session.userId = undefined;
      console.log("this is the user session state:", req.session.userId);
      res.json({currentUserSession: "this is the user session state: " + req.session.userId});
    }else{
      console.log("No current user");
      res.json({message: "No current user yet"});
    }
  },

}
