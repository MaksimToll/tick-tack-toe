/**
 * Created by Vasyl Danylyuk on 26.07.2015.
 */
module.exports = (function(){
    const DEFAULT_MATRIX_SIZE = 10;

    function Game(userX, userO){
        if(userX === undefined){
            throw "Can't create game without any users"
        }
        this.userX = userX;
        this.userO = userO;
        this.move = userX;
        this.table = new Matrix()
    }

    Game.prototype.move = function(id, cells){

    }
})();
