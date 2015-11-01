var Element = require('../js/Element');
module.exports = (function(){
    function Matrix(size) {
        this.matr = this.createArray(size);
        this.matr[0][0].addLine(0);
        this.matr[0][0].addLine(3);
        this.matr[0][size-1].addLine(0);
        this.matr[0][size-1].addLine(1);
        this.matr[size-1][0].addLine(3);
        this.matr[size-1][0].addLine(2);
        this.matr[size-1][size-1].addLine(1);
        this.matr[size-1][size-1].addLine(2);

        for(var i = 1;i<size-1;i++){
            this.matr[0][i].addLine(0); // top line of array
            this.matr[size-1][i].addLine(2); // bottom line
            this.matr[i][0].addLine(3); // left line
            this.matr[i][size-1].addLine(1); // right line


        }


    }



    Matrix.prototype.createArray = function (size) {
        var resArr = [];
        for (var i = 0; i < size; i++) {
            resArr[i] = [];
            for (var j = 0; j < size; j++) {
                resArr[i][j] = new Element();
            }
        }
        return resArr;
    };

    Matrix.prototype.drawLine = function (сoord , userId) {
        var resultArray = [];

        function verificationInputCoordinate(cord) {
            if(cord[0].i===cord[1].i){
                if(Math.abs(cord[0].j-cord[1].j)>1){
                    throw "IncorrectCoordenateExceprion";
                }
            }
            else if(cord[0].j===cord[1].j){
                if(Math.abs(cord[0].i-cord[1].i)>1){
                    throw "IncorrectCoordenateExceprion";
                }
            }else{
                throw "IncorrectCoordenateExceprion";
            }
        }

        verificationInputCoordinate(сoord);
        if (сoord[0].i > сoord[1].i && сoord[0].j === сoord[1].j) {
            this.matr[сoord[0].i][сoord[0].j].addLine(0);
            this.matr[сoord[1].i][сoord[1].j].addLine(2);
        } else if (сoord[0].i < сoord[1].i && сoord[0].j === сoord[1].j) {
            this.matr[сoord[0].i][сoord[0].j].addLine(2);
            this.matr[сoord[1].i][сoord[1].j].addLine(0);
        } else if (сoord[0].j > сoord[1].j && сoord[0].i === сoord[1].i) {
            this.matr[сoord[0].i][сoord[0].j].addLine(3);
            this.matr[сoord[1].i][сoord[1].j].addLine(1);
        } else if (сoord[0].j < сoord[1].j && сoord[0].i === сoord[1].i) {
            this.matr[сoord[0].i][сoord[0].j].addLine(1);
            this.matr[сoord[1].i][сoord[1].j].addLine(3);
        } else {
            throw "IncorrectCoordenateExceprion";
        }
        if(this.matr[сoord[0].i][сoord[0].j].getCount()===4){
            resultArray.push({'i':сoord[0].i,'j':сoord[0].j});
            this.matr[сoord[0].i][сoord[0].j].userId = userId;
        }
        if(this.matr[сoord[1].i][сoord[1].j].getCount()===4){
            resultArray.push({'i':сoord[1].i,'j':сoord[1].j});
            this.matr[сoord[1].i][сoord[1].j].userId = userId;
        }
        return resultArray;

    };

    // function return Array of closed elements
    Matrix.prototype.checkFinishGame = function(){
        var resultArray = [];
        var winCounter=1;
        for(var i = 0;i<this.matr.length;i++){
            resultArray[i] = [];
            for(var j =0; j<this.matr[i].length;j++){
                if(this.matr[i][j].getCount()==4){
                    resultArray[i][j] = this.matr[i][j].userId;
                }else{
                    resultArray[i][j] = 0;
                    winCounter = 0;
                }
            }
        }
        return {status: winCounter, array: resultArray, allMatrix: this.matr};
    };

 return Matrix;
})();


