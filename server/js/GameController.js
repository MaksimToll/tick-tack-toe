/**
 * Created by Vasyl Danylyuk on 25.07.2015.
 */
var express = require('express');
var router = express.Router();
var gameProvider = require('./games/GameProvider');

router.get('/games/:id', function(req, res){
    var result = gameProvider.getGame(req.params.id).check();
    res.write(JSON.stringify(result));
    res.sendStatus(200);
    res.end();
});

router.put('/games/:id', function(req, res){
    var userId = req.session.id;
    var cells = JSON.parse(req.body);
    var result = gameProvider.getGame(req.params.id).move(userId,cells);
    res.write(JSON.stringify(result));
    res.sendStatus(200);
    res.end();
});



module.exports = router;
