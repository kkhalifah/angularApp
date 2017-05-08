var app = angular.module("crushMod");


app.controller("fizzController", function($scope, buzzyFactory) {
  console.log('youre a fucking legend')
  $scope.submit = function(number) {
    console.log(getInput())

  }



});
