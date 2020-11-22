(function(){
        "use strict"

        var module=angular.module("myModule",[]);
        
        module.component("movieList", {
            templateUrl: "/script/movie-list.component.html",
            controller: function(){
                this.message="This will be available inside script/movie-list.component.html and we can use {{$ctrl.message}}"
            }
        });
});