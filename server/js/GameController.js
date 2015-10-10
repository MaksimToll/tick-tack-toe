/**
 * Created by Vasyl Danylyuk on 25.07.2015.
 */
var express = require('express');
var router = express.Router();
var gameProvider = require('./games/GameProvider');

router.get('/game', function(req, res){
    var gameId = req.session.gameId;
    var result = gameProvider.getGame(gameId).check();
    res.write(JSON.stringify(result));
    res.end();
});

router.put('/games', function(req, res){
    var userId = req.session.userId;
    var gameId = req.session.gameId;
    var cells = JSON.parse(req.body.elements);
    var result = gameProvider.getGame(gameId).move(userId,cells);
    res.write(JSON.stringify(result));
    res.end();
});

module.exports = router;
