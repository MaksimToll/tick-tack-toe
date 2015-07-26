/**
 * Created by Vasyl Danylyuk on 25.07.2015.
 */
var express = require('express');
var router = express.Router();
var userProvider = require('./users/UserProvider');

router.post('/register', function(req, res){
    var userName = req.body.name;

    user = userProvider.registerUser(userName);

    req.session.authorized = true;
    req.session.username = userName;
    req.session.userId = user.id;

    res.sendStatus(200);
    res.end();
});



module.exports = router;
