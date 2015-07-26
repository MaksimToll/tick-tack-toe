/**
 * Created by Vasyl Danylyuk on 25.07.2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var routes = require('./routes');

var app = express();
app.use("/", express.static(path.join(__dirname, 'view')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cookieSession({ secret: 'superSecretCode'} ));

/*
 sessions
 */
function authorize() {
    function auth(req, res, next) {

        if (req.session.authorized) {
            console.log(req.session.username);
            res.end();
            //next();
            return;
        }
        else {
            req.session.authorized = true;
            req.session.username = "user";
            req.session.userId =
            res.end();
            return;
        }
    }
    return auth;
}


app.use('/', authorize());
app.use('/', routes);

app.listen(8888);


