var app = angular.module('crushMod');
app.controller('factsController', function($scope, $http, factsFactory) {

  $scope.retrieveFacts = function(category) {
    factsFactory.setFacts($scope.category).then(function() {
      $scope.facts = factsFactory.getFacts();
      console.log($scope.facts);
    })
  }
});
