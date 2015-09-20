/**
 * Created by Vasyl Danylyuk on 26.07.2015.
 */
var Matrix = require('../Matrix');
var userProvider = require('../users/UserProvider');

module.exports = (function(){
    const DEFAULT_MATRIX_SIZE = 10;

    const STATUS_WAIT = 3;
    const STATUS_PLAY = 0;
    const STATUS_CLOSED = 2;
    const STATUS_WIN = 1;

    function Game(userX){
        if(userX === undefined){
            throw "Can't create game without any users"
        }
        this.id = getId();
        this.userX = userX;
        this.userToMove = userX;
        this.matrix = new Matrix(DEFAULT_MATRIX_SIZE);
        this.status = STATUS_WAIT;

        var _this = this;
        setInterval(function(){
            if(_this.status == STATUS_CLOSED) return;
            if(_this.status !== STATUS_WAIT && !checkUsersOnline(_this)){
                this.status = STATUS_CLOSED;
            }
        }, 5000);
    }

    /*
     Private gameId generator
     */
    var lastId = 1;
    function getId(){
        return lastId++;
    }

    function checkUsersOnline(game){
        if(game.status === STATUS_PLAY) {
            if (!userProvider.contains(game.userO.id)) return false;
        }
        return userProvider.contains(game.userX.id);
    }

    Game.prototype.setOpponent = function(user){
        if(this.userO === undefined){
            this.userO = user;
            this.status = STATUS_PLAY;
        }else{
            throw 'Game already had two users'
        }
    };

    Game.prototype.move = function(id, cells){

        if(this.status === STATUS_WAIT) throw 'Game is not started yet!';
        if(this.status === STATUS_CLOSED) throw 'Your opponent leave game!';
        if(this.status === STATUS_WIN) throw 'Game is already finished!';
        if(this.userToMove.id !== id) throw "You can't move. Let opponent.";



        var closedElements = this.matrix.drawLine(JSON.parse(cells), id);

        this.userToMove = this.userX.id === id ? this.userO : this.userX;

        return closedElements;
    };

    Game.prototype.check = function(){
        var result;

        if(this.status === STATUS_PLAY){
            var gameCheck = this.matrix.checkFinishGame();
            this.status = gameCheck.status ? STATUS_WIN : STATUS_PLAY;
            result = {
                array: gameCheck.array
            }
        }

        result = {
            status: this.status
        };

        return result;
    };

    return Game;
})();