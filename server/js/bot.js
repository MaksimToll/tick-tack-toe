/**
 * Created by fagim on 25.07.15.
 */
Matrix.prototype.findThrees = function () {
    var resArrayOfThrees = [];
    for (var i = 0; i < Matrix.length; i++) {
        for (var j = 0; j < Matrix[i].length; j++) {
            var countElement = Matrix[i][j];
            if (countElement.getCount() === 3) {
                resArrayOfThrees.push({"i": i, "j": j});
            }
        }
    }
    return resArrayOfThrees;

};

// return -1 if no found element less then 2
Matrix.prototype.findBetterElement = function () {
    var resultElement;
    for (var i = 0; i < Matrix.length; i++) {
        for (var j = 0; j < Matrix[i].length; j++) {
            var currentElement = Matrix[i][j];
            if (currentElement.getCount() < 2) {
                resultElement = {"i": i, "j": j};
                return resultElement;
            }
        }
    }
    return -1;
};

Matrix.prototype.checkNeighbour = function (coord, side) {
    if (side === 0 && coord.i >= 0) {
        Matrix[coord.i][coord.j].getCount();
    }
};

Matrix.prototype.checkBestLineForElement = function (coord) {
    var current = Matrix[coord.i][coord.j];
    for (var k = 0; k < current.arr.length; k++) {
        if (current[k] == 0 && checkNeighbour[coord, k]) {
            drawLineForOneElement(coord, side);
        }
    }
    if (currentElement.arr[1]) {

    }
};