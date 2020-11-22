## What is module in Angular JS? ##
- A module is a container for different parts of your application that is controllers, services, directives, filters etc.

## How to create a module? ##
- We can use angular object's module() method to create a module
```html
var myApp=angular.module("myModule",[]);
```
- In our case second paramter is null because we don't have any dependencies at the moment.


## Example ##
```java
<html ng-app="myModule">
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
</head>
<body>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script
    <script src="script/script.js"/>
</body>
</html>
```

```js
//In my case, second paramter is empty array because I don't have any dependencies
var myApp=angular.module("myModule",[])
```