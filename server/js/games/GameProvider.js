/**
 * Created by Vasyl Danylyuk on 26.07.2015.
 */
var Game = require(Game);

module.exports = (function(){
    var games = [];
    var freeGame;

    function GameProvider(){

    }

    GameProvider.prototype.letsPlay = function(user){
        var gameId;
        if(freeGame !== undefined){
            freeGame.setOpponent(user);
            games.push(freeGame);
            gameId = freeGame.id;
            freeGame = undefined;
        }else{
            freeGame = new Game(user);
            gameId = freeGame.id;
        }
        return gameId;
    };

    GameProvider.prototype.getGame = function(id){
        var result;
        games.every(function(game){
            if(game.id === id){
                result = game;
                return false;
            }
        });
        return result;
    };

})();
