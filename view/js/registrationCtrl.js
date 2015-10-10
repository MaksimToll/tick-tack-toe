/**
 * Created by maks on 13.09.2015.
 */

var app = angular.module('myApp', []);

app.controller('regCtrl', function ($scope, $http) {
    $scope.firstName = "John",
        $scope.lastName = "Doe",
        $scope.myData = {};

    $scope.myData.doClick = function (item, event) {
        var user = {name: $scope.username};
        var responsePromise = $http.post("/register", user);
        responsePromise.success(function (data, status, headers, config) {
            //$scope.myData.fromServer = data.title();
            $scope.tryShowTable();

        });
        responsePromise.error(function (data, status, headers, config) {
            Console.log("AJAX failed!");
        });
    }
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    }
    $scope.showRegWindow = function () {
        $('#myModal').modal('show');
    }

    $scope.tryShowTable = function() {
            table.createTable(15);
    }

});

app.controller("gameCtrl", function($scope, $http){
    $scope.tryShowTable = function() {
        jQuery(document).ready(function(){
            table.createTable(15);
        });

    }
});