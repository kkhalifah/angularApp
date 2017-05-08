var app = angular.module('crushMod');

app.controller('factsController', function($scope, $http) {

  $scope.facts = [];

  $scope.getFacts = function() {

  $http({
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.mashape.com/jokes/categories' + '.json',
    params: {}
  }).then(function successCallback(response) {
  //log the API info
    console.log(response.data.data.children);
    $scope.posts = response.data.data.children;
  }, function(error) {
    console.log(error);
    })
  };
});
