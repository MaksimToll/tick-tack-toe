

var createArray = function(size){
    var resArr=[4][4];
    for(var i = 0; i<size; i++){
        for(var j =0; j<size; j++){
            resArr[i][j] = new Element();
        }
    }
    return resArr;
}
var temp = new Element();
console.log(temp.addLine(2));
console.log(temp.arr);
console.log(temp.getCount());
console.log(createArray(4));


