var Table = (function(){
    function Table(){}

    /*
    returns cell by that index
     */
    Table.prototype.getViewCell = function(i,j) {
        return jQuery('#table tr:eq(' + i + ') td:eq(' + j + ')')
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




    return new Table();
})();


