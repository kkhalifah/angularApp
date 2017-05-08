var app = angular.module("crushMod");

app.config(function($routeProvider) {

  $routeProvider.when('/fizzBuzz', {

    templateUrl: "views/fizzBuzz.html",
    controller: "fizzController"
  })

  $routeProvider.when('/index', {

    templateUrl: "index.html",
    controller: "fizzController"

  });
});
//api info here
