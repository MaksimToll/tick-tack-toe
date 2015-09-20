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
    if ((req.session.authorized && userProvider.contains(req.session.userId) )|| path === '/register') {
        next();
    }
    else {
        res.sendStatus(401);
    }
});

router.post('/register', function(req, res){
    console.log(req.body);

    userName = req.body.name ? req.body.name : '';

    var user = userProvider.registerUser(userName);

    var gameId = gameProvider.letsPlay(user);

    var result = {gameId: gameId, userId: user.id};

    res.write(JSON.stringify(result));

    req.session.authorized = true;
    req.session.username = user.name;
    req.session.userId = user.id;
    req.session.gameId = gameId;

    res.end();
});

module.exports = router;


