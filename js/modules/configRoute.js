var app = angular.module("crushMod");

app.config(function($routeProvider) {

  $routeProvider.when('/fizzBuzz', {

    templateUrl: "views/fizzBuzz.html",
    controller: "fizzController"
  })

  $routeProvider.when('/facts', {

    templateUrl: "views/facts.html",
    controller: "factsController"

  });
});
//api info here
