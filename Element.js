/**
 * Created by fagim on 25.07.15.
 */
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