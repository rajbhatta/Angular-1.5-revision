//Step 1: Create a module
var myApp=angular.module("myModule",[]);

myApp.controller("emp", function ($scope,$log){

    //1st function
    $scope.search = function () {
        $log.log('Hello search is clicked')
    };

    //2nd function
    $scope.click = function () {
        $log.log('Hello table is clicked')
    };

})