var app = angular.module("crushMod");


app.controller("fizzController", function($scope, buzzyFactory) {
  console.log("you're a fucking legend")
  $scope.submit = function(number) {
    buzzyFactory.setInput();

    console.log(buzzyFactory.getInput());

  }
});
