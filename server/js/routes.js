/**
 * Created by Vasyl Danylyuk on 25.07.2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send(usersController.get());
    res.end();
});

router.get('/:id', function(req, res){
    res.send(usersController.get(req.params.id));
    res.end();
});

router.post('/', function(req, res){
    var id = usersController.add(req.body);
    if(id){
        res.send(id+'');
        res.sendStatus(201);
        res.end();
    }else{
        res.sendStatus(400);
        res.end();
    }
});

router.put('/:id', function(req, res){
    if(usersController.update(req.params.id, req.body)){
        res.sendStatus(200);
        res.end();
    }else{
        res.sendStatus(400);
        res.end();
    }
});

router.delete('/:id', function(req, res){
    if(usersController.del(req.params.id)){
        res.sendStatus(201);
    }else{
        res.sendStatus(404);
    }
    res.end();
});

module.exports = router;
