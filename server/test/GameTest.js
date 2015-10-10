var Game = require("../js/games/Game.js");
var User = require("../js/users/User.js");
var assert = require('assert');
var should = require('should');

describe("Game test", function(){
    const STATUS_WAIT = 3;
    const STATUS_PLAY=0;

    describe("Create game test", function(){

        it("UserO should be undefined after creating", function(){
            var game = new Game(new User('User X'));

            should.not.exist(game.userO);
            game.userX.should.be.ok;
            game.status.should.be.eql(STATUS_WAIT);
        })
    });

    describe("Set opponent test", function(){

        it("Should be PLAY afte add second user", function(){
            var game = new Game(new User('User X'));

            game.setOpponent(new User('User O'));

            game.status.should.be.eql(STATUS_PLAY);
            game.userX.should.be.ok;
            game.userO.should.be.ok;
        })
    });

    describe("Move test", function(){

        var userX = new User('User X');
        var userO = new User('User O');

        var game = new Game(userX);
        game.setOpponent(userO);

        var firstMove  = [{i:0, j:0}, {i:1,j:0}];
        var secondMove  = [{i:0, j:0}, {i:0,j:1}];
        var thirdMove  = [{i:1, j:1}, {i:1,j:2}];


        it("After first move nothing is closed", function(){
            game.move(userX.id, firstMove).should.be.empty;
        });

        it("After second move one cell is closed", function(){
            game.move(userO.id, secondMove).should.eql([{i:0, j:0}]);
        });

        it("You can't make two moves", function(){
            (function(){
                game.move(userO.id, secondMove)
            }).should.throw("You can't move. Let opponent.");
        });

        it("You can't make two moves", function(){
            game.move(userX.id, secondMove).should.eql([{i:0, j:0}]);
        });

        it("You can't make two moves", function(){
            game.move(userX.id, thirdMove).should.be.empty;
        });


    })

});