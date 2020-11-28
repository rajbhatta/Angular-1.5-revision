//Step 1: Create a module
var myApp=angular.module("myModule",[]);

myApp.controller("emp", [$scope, function($a){
    $a.name="Raj Bhatta"
}]);


myApp.controller("empDetails", [$scope, function($detailsScope){
    $detailsScope.address="British Columbia Canada"
}]);

