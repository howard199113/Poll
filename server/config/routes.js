var Survey = require('./../controllers/surveys.js');
var path = require('path');

var auth = function(req,res,next){
  if (req.session.userId == undefined){
    res.sendStatus(401);
  }else{
    next();
  }
}

module.exports = function(app){

  app.post('/users', Survey.register);

  app.use(auth);

  app.get('/home/current', Survey.getCurrentUser);
  app.post('/home/add', Survey.addQuestion);
  app.get('/home/getAllQuestions', Survey.getAllQuestions);
  app.post('/home/getOptions', Survey.getOptions);
  app.post('/home/like1', Survey.like1);
  app.post('/home/like2', Survey.like2);
  app.post('/home/like3', Survey.like3);
  app.post('/home/like4', Survey.like4);
  app.post('/home/delete', Survey.delete);
  app.get('/home/logout', Survey.logout);



  app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });


}
