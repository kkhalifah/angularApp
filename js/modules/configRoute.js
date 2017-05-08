var app = angular.module("crushMod");

app.config(function($routeProvider) {

  $routeProvider.when('/fizzBuzz', {

    templateUrl: "fizzBuzz.html",
    controller: "fizzController"
  })

}
