var Table = (function(){
    function Table(){}

    Table.prototype.getViewCell = function(i,j) {
        return jQuery('#table tr:eq(' + i + ') td:eq(' + j + ')')
    };


    return new Table();
})();


