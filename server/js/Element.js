
    function Matrix(size) {
        this.matr = this.createArray(size);
    }

    function Element() {
        this.arr = [0, 0, 0, 0];
        this.addLine = function (NumberOfLine) {
            this.arr[NumberOfLine] = 1;
        };
        this.getCount = function () {
            var res = 0;
            for (var i = 0; i < this.arr.length; i++) {
                res += this.arr[i];
            }
            return res;
        }
    }

    Matrix.prototype.createArray = function (size) {
        var resArr = new Array();
        for (var i = 0; i < size; i++) {
            resArr[i] = new Array();
            for (var j = 0; j < size; j++) {
                resArr[i][j] = new Element();
            }
        }
        return resArr;
    };


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
    var emylCoorrd = [{"i": 2, "j": 2}, {"i": 3, "j": 2}];
    Matrix.prototype.drawLine = function (сoord) {
        if (сoord[0].i > сoord[1].i && сoord[0].j === сoord[1].j) {
            Matrix[сoord[0].i][сoord[0].j].addLine(0);
            Matrix[сoord[1].i][сoord[1].j].addLine(2);
        } else if (сoord[0].i < сoord[1].i && сoord[0].j === сoord[1].j) {
            Matrix[сoord[0].i][сoord[0].j].addLine(2);
            Matrix[сoord[1].i][сoord[1].j].addLine(0);
        } else if (сoord[0].j > сoord[1].j && сoord[0].i === сoord[1].i) {
            Matrix[сoord[0].i][сoord[0].j].addLine(3);
            Matrix[сoord[1].i][сoord[1].j].addLine(1);
        } else if (сoord[0].j < сoord[1].j && сoord[0].i === сoord[1].i) {
            Matrix[сoord[0].i][сoord[0].j].addLine(1);
            Matrix[сoord[1].i][сoord[1].j].addLine(3);
        } else {
            throw "IncorrectCoordenateExceprion";
        }
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


