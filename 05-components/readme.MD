## How is component in Angular JS? ##
- Component is a resuable html or section. For example <movie-list> is a component below.
```js
<div class="container">
        <movie-list></movie-list>
    </div>
```

## How to register component to module in AngularJs? ##
```js
(function(){
        "use strict"

        var module=angular.module("myModule",[]);
        
        module.component("movieList", {
            template: "Hello from a component"
        });
});
```

### How to include it inside view page ? ###
```js
<html ng-app="myModule">
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
</head>
<body>

    <div class="container">
        <movie-list></movie-list>
    </div>
    

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
    <script src="script/script.js"></script>
    <script src="script/movie-list.component.js"></script>
</body>
</html>
```
