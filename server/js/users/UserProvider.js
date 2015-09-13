module.exports = (function(){
    const OUTDATED_TIME = 10000;
    const CLEAR_INTERVAL = 5000;

    var users = [];
    /*
    UsersProvider constructor
     */
    function UserProvider(){
        setInterval(clearOutdated, CLEAR_INTERVAL);
    }

    /*
    Register user for game
     */
    UserProvider.prototype.registerUser = function(name){
        var user = new User(name);
        users.push(user);
        return user;
    };

    /*
    Set that user is onLine
     */
    UserProvider.prototype.updateUser = function(id){
        var result = false;
        users.forEach(function(user){
            if(user.id === id){
                user.lastUpdated = Date.now();
                result =  true;
            }
        });
        return false;
    };

    UserProvider.prototype.contains = function(id){
        return !users.every(function(user, index, users){
            return user.id !== id;
        });

    };
    /*
    Delete from users all users that was updated more than OUTDATED_TIME ago
     */
    function clearOutdated(){
        users.forEach(function(user, index, users){
            if(Date.now() - user.lastUpdated > OUTDATED_TIME){
                users.splice(index, 1)
            }
        })
    }


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

    var userProvider;
    function getUserProvider(){
        if(userProvider === undefined){
            userProvider = new UserProvider();
        }
        return userProvider;
    }

    return getUserProvider();
})();
