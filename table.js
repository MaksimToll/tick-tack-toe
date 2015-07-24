var Table = (function(){
    function Table(){}

    /*
    returns cell by that index
     */
    Table.prototype.getViewCell = function(i,j) {
        return jQuery('#table').find('tr:eq(' + i + ') td:eq(' + j + ')')
    };

    /*
    returns index by given cell
     */
    Table.prototype.getCellIndex = function(cell){
        var aI = jQuery(cell).closest('tr').index();
        var aJ = jQuery(cell).index();

        return {"i": aI, "j": aJ};
    };

    /*
    Convert table index to array index
     */
    Table.prototype.getArrayIndex = function(i,j){
        var aI, aJ;

        if(i%2 == 1 || j%2 == 1) return undefined;

        aI = i/2;
        aJ = j/2;

        return {"i": aI, "j": aJ};
    };

    Table.prototype.markLine = function(cell){

        var cellIndex = this.getCellIndex(cell);

        /*
        cell is element, not a  line
         */
        if(cellIndex.i%2 == 0 && cellIndex.j%2 == 0) throw "IllegalArgumentException";

        /*
        cell is small appendix cross lines
         */
        if(cellIndex.i%2 == 1 && cellIndex.j%2 == 1) throw "IllegalArgumentException";

        jQuery(cell).addClass('marked');

        var elements = [];

        if(cellIndex.i%2 == 0){//element is vertical line
            elements[0] = this.getArrayIndex({"i": cellIndex.i, "j": cellIndex.j - 1});
            elements[1] = this.getArrayIndex({"i": cellIndex.i, "j": cellIndex.j + 1});
        }else if(cellIndex.j%2 == 0){
            elements[0] = this.getArrayIndex({"i": cellIndex.i - 1, "j": cellIndex.j});
            elements[1] = this.getArrayIndex({"i": cellIndex.i + 1, "j": cellIndex.j});
        }

    };




    return new Table();
})();


