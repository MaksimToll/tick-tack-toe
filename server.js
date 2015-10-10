var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('express-session');
var registrationController = require('./server/js/RegistrationController');
var gameController = require('./server/js/GameController');

var app = express();

app.use("/static", express.static(path.join(__dirname, './view')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cookieSession({ secret: 'superSecretCode'} ));

app.use('/', registrationController);
app.use('/', gameController);

app.listen(8888);


