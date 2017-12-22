var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client', 'dist')));


app.use(session({secret:"DontTellAnybody"}));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, ()=>{
  console.log("on port 8000");
})
