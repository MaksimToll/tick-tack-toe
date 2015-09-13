var userProvider = require('../js/users/UserProvider');

describe("UserProviderTest", function(){

    describe("registerUserTest", function(){

        it('Should return game instance if user is second', function(){
            var userName = 'User';
            var user = userProvider.registerUser(userName);
            user.should.be.type('object');
            user.should.have.property('name', userName);
            user.should.have.property('id');
        });
    });

    describe("updateUserTest", function(){

        it('Should return true if user exist and update user.lastUpdated', function(){
            var userName = 'User';
            var user = userProvider.registerUser(userName);
            var userId = user.id;
            userProvider.updateUser(userId).should.be.ok;
            console.log(user.lastUpdated);
            user.lastUpdated.should.be.Number;
            userProvider.updateUser(userId+12879).should.not.be.ok;
        });
    });

    describe("containsTest", function(){

        it('Should return true if user exist', function(){
            var userName = 'User';
            var user = userProvider.registerUser(userName);
            var userId = user.id;
            userProvider.contains(userId).should.be.ok;
            userProvider.contains(userId+12879).should.not.be.ok;
        });
    });

});
