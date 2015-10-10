module.exports = (function(){
    /*
     Private userId generator
     */
    var lastId = 1;
    function getId(){
        return lastId++;
    }

    /*
     User constructor
     */
    function User(name){
        this.name = name;
        this.id = getId();
        this.lastUpdated = Date.now();
    }

    return User;
})();