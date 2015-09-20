/**
 * Created by fagim on 25.07.15.
 */
var Matrix = require('../js/Matrix');

describe('Matrix',function(){
    var matr = new Matrix(4);

    matr.matr[2][2].addLine(0);
    matr.matr[2][2].addLine(1);
    matr.matr[2][2].addLine(3);

    describe('getCount', function(){

        it('Should return 3 for matr[2][2] element', function(){
            matr.matr[2][2].getCount().should.be.equal(3);
            matr.matr[2][3].getCount().should.be.equal(1);

        });


    });
    describe("addLine", function(){
        it("Array of side in element should be equal [0,1,0,0]", function(){
            matr.matr[1][1].addLine(1);
            var actual = matr.matr[1][1];
            actual.arr.should.eql([0,1,0,0]);
        });
    });
    describe("checkFinishGame", function(){
        it("function should return array[][] equal [[0,0,0,0],[0,0,0,0],[0,0,34,0],[0,0,0,0]]", function(){
            var emylCoorrd = [{"i": 2, "j": 2}, {"i": 3, "j": 2}];
            matr.drawLine(emylCoorrd, 34);
            var expected = {status: 0, array: [[0,0,0,0],[0,0,0,0],[0,0,34,0],[0,0,0,0]]};
            var actual = matr.checkFinishGame();

            actual.should.eql(expected);
        });
    });
    describe("drawLine", function(){
        it("function should return should empty array []", function(){
            var emylCoorrd = [{"i": 1, "j": 2}, {"i": 1, "j": 3}];
            var actual = [];
            actual.should.eql(matr.drawLine(emylCoorrd));
        });
        it("function should return should empty array [0,1,0,0]", function(){

            var emylCoorrd = [{"i": 2, "j": 2}, {"i": 3, "j": 2}];
            var actual = [{"i": 2, "j": 2}];
            console.log(matr.matr[2][2].userId);
            console.log(matr.matr[2][2].getCount());
            actual.should.eql(matr.drawLine(emylCoorrd));

        });
    });
});