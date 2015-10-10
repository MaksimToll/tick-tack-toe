var User = require('./User.js');

module.exports = (function(){
    const OUTDATED_TIME = 100000000000;
    const CLEAR_INTERVAL = 500000;

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

    var userProvider;
    function getUserProvider(){
        if(userProvider === undefined){
            userProvider = new UserProvider();
        }
        return userProvider;
    }

    return getUserProvider();
})();
