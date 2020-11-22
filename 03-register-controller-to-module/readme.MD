## How to register a controller to a module? ##
```html
//Step 1: Create a module
var myApp=angular.module("myModule",[]);

//Step 2 : Create a controlller
var myController=function($scope){
    $scope.message="Hello angular JS";
};

//Step 3: Register controller to myApp
myApp.controller("myController",
                myController
                );



//Step 4: Alternative way to register controller is replace myController with the code created in Step 2
myApp.controller("myController",
                function($scope){
                                    $scope.message="Hello angular JS";
                                }
                );
```