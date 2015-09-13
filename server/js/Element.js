/**
 * Created by fagim on 26.07.15.
 */
module.exports = (function(){
    function Element() {
        this.arr = [0, 0, 0, 0];
        this.userId;
    }
        Element.prototype.addLine = function (NumberOfLine ) {
            this.arr[NumberOfLine] = 1;

        };
        Element.prototype.setUserId = function(userId){
            if(this.getCount()===4){
                this.userId = userId;
            }
        };

        Element.prototype.getCount = function () {
            var res = 0;
            for (var i = 0; i < this.arr.length; i++) {
                res += this.arr[i];
            }
            return res;
        };

    return Element;
})();