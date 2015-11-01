/**
 * Created by maks on 13.09.2015.
 */

var app = angular.module('myApp', []);

app.controller('regCtrl', function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.myData = {};

    $scope.myData.doClick = function (item, event) {
        var user = {name: $scope.username};
        var responsePromise = $http.post("/register", user);
        responsePromise.success(function (data, status, headers, config) {
            var userId = data.userId;
            var gameId = data.gameId;
            $scope.tryShowTable(userId, gameId);
            $("#myModal").modal("hide");
        });

        responsePromise.error(function (data, status, headers, config) {
            Console.log("AJAX failed!");
        });

    }

    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
    $scope.showRegWindow = function () {
        $('#myModal').modal('show');
    };

    $scope.tryShowTable = function(userId, gameId) {
            table.createTable(15, userId, gameId);
            setInterval(updateTable, 1000);
    };

    function updateTable(){
        var responsePromise = $http.get("/game");
        responsePromise.success(function (data, status, headers, config){
            if(data.status == 0){
                table.updateTable(data.array)
            }
        });

    }


});
app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

app.controller("gameCtrl", function($scope, $http){
    $scope.tryShowTable = function() {
        jQuery(document).ready(function(){
            table.createTable(15);
        });

    }
});