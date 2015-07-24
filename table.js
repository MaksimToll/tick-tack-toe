var Table = (function(){
    function Table(){

    }

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

    /*
    Mark given line and invoke it's in Matrix
     */
    Table.prototype.drawLine = function(cell){

        var cellIndex = this.getCellIndex(cell);

        //cell is element, not a  line
        if(cellIndex.i%2 == 0 && cellIndex.j%2 == 0) throw "IllegalArgumentException";

        //cell is small appendix cross lines
        if(cellIndex.i%2 == 1 && cellIndex.j%2 == 1) throw "IllegalArgumentException";

        jQuery(cell).addClass('marked');

        var elements = [];

        if(cellIndex.i%2 == 0){//element is vertical line
            elements[0] = this.getArrayIndex(cellIndex.i, cellIndex.j - 1);
            elements[1] = this.getArrayIndex(cellIndex.i, cellIndex.j + 1);
        }else if(cellIndex.j%2 == 0){//element is horizontal line
            elements[0] = this.getArrayIndex(cellIndex.i - 1, cellIndex.j);
            elements[1] = this.getArrayIndex(cellIndex.i + 1, cellIndex.j);
        }
        try{
            Matrix.drawLine(elements);
        }catch (e){
            console.log("Matrix is not defined");
        }

        return elements;

    };

    Table.prototype.createTable = function(size){
        var table = jQuery('#table');

        for(var i = 0; i < size; i++){
            var tr = createRow(i);
            for(var j = 0; j < size; j++){
                var td = createColumn(j);
                jQuery(tr).append(td)
            }
        }
    };

    function createColumn(index){
        var td = jQuery('<td></td>');
        if(index%2 == 0){
            jQuery(td).addClass('wide');
        } else{
            jQuery(td).addClass('narrow');
            jQuery(td).bind('click', function(element){
                Table.drawLine.call(table, element);
            })
        }
        return td;
    }

    function createRow(index){
        var tr = jQuery('<tr></tr>');
        if(index%2 == 0){
            jQuery(tr).addClass('tall');
        } else{
            jQuery(tr).addClass('low');
        }
        return tr;
    }

    return new Table();
})();


