var app = angular.module('crushMod');

app.controller('factsController', function($scope, $http) {

  $scope.facts = [];

  $scope.getFacts = function() {

  $http({
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.mashape.com/jokes/search' + '.json',
    params: { limit : '3' }
  }).then(function successCallback(response) {
  //log the API info
    console.log(response.data.data.children);
    $scope.facts = response.data.data.children;
  }, function(error) {
    console.log(error);
    })
  };
});

var app = angular.module('crushMod');

app.directive('', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl:'views/facts.html'
    //template:
  }

});
