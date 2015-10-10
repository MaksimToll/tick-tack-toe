var table = (function(){


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
     Convert array index to table index
     */
    Table.prototype.getTableIndex = function(i,j){
        return {"i": i*2, "j": j*2};
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

        var data = {
            elements : JSON.stringify(elements)
        };

        jQuery.ajax({
            url:'/games',
            method: 'PUT',
            data: data,
            success: function(){
                console.log('Draw line successfully sent to server');
            },
            error: function(){
                console.log('Error occured during ');
            }
        });

        return elements;

    };

    /*
    Creates table in DOM model
     */
    Table.prototype.createTable = function(size, userId, gameId){
        this.gameId = userId;
        this.userId = gameId;

        if(size%2 == 0) size++;

        var tbl = jQuery('#table');

        for(var i = 0; i < size; i++){
            var tr = createRow(i);
            for(var j = 0; j < size; j++){
                var td = createColumn(j);
                if(i%2 ^ j%2){
                    jQuery(td).bind('click', function(element){
                        table.drawLine.call(table, element.target);
                    });
                }
                jQuery(tr).append(td)
            }
            jQuery(tbl).append(tr);
        }
    };

    /*
    Update table view by array passed from server
     */
    Table.prototype.updateTable = function(array){
        var _this = this;
        array.forEach(function(row, i, table){
            row.forEach(function(cell, j){
                var tableCell = _this.getTableIndex(i,j);
                if(cell == _this.userId){
                    jQuery(_this.getViewCell(tableCell.i, tableCell.j)).addClass('myCell');
                }else if(cell !== 0){
                    jQuery(_this.getViewCell(tableCell.i, tableCell.j)).addClass('opponentCell');
                }
            })
        })
    };

    function createColumn(index){
        var td = jQuery('<td></td>');
        if(index%2 == 0){
            jQuery(td).addClass('wide');
        } else{
            jQuery(td).addClass('narrow');
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

    var table = new Table();
    return table;
})();


