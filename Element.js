function Element(){
    this.arr = [0, 0, 0, 0];
    this.addLine = function(NumberOfLine){
        this.arr[NumberOfLine]=1;
    }
    this.getCount = function(){
        var res=0;
        for(var i = 0; i<this.arr.length;i++){
            res+=this.arr[i];
        }
        return res;
    }
}

var createArray = function(size){
    var resArr= new Array();
    for(var i = 0; i<size; i++){
        resArr[i] = new Array();
        for(var j =0; j<size; j++){
            resArr[i][j] = new Element();
        }
    }
    return resArr;
}