/**
 * Created by Vasyl Danylyuk on 25.07.2015.
 */
var express = require('express');
var url = require('url');
var router = express.Router();
var userProvider = require('./users/UserProvider');
var gameProvider = require('./games/GameProvider');

router.use('/', function(req, res, next){
    var path = url.parse(req.url).pathname;
    if ((req.session.authorized && userProvider.contains(req.session.id) )|| path === '/register') {
        next();
    }
    else {
        res.sendStatus(401);
        res.end();
    }
});

router.post('/register', function(req, res){
    var userName = req.param('name') ? req.param('name') : '';

    user = userProvider.registerUser(userName);

    var gameId = gameProvider.letsPlay(user);

    var result = {gameId: gameId};

    res.write(JSON.stringify(result));

    req.session.authorized = true;
    req.session.username = user.name;
    req.session.userId = user.id;

    res.sendStatus(200);
    res.end();
});

module.exports = router;


