var Game = require("../js/games/Game.js");
var should = require('should');

describe("Game test", function(){

    describe("Create game test", function(){
        it("Create without user", function(){
            new Game(undefined).should.throw("Can't create game without any users")
        });

        it("UserO should be undefined after creating", function(){
            var game = new Game("userX");

            should.not.exist(game.userO);
        })
    });

    describe("set opponent test", function(){

        it("Should be ")
    });

});