var app = angular.module('crushMod');
app.controller('factsController', function($scope, $http, factsFactory) {

  $scope.retrieveFacts = function(category) {
    factsFactory.setFacts($scope.category).then(function() {
      $scope.facts = factsFactory.getFacts();
      console.log($scope.facts);
    })
  }
});

var app = angular.module('crushMod');

app.directive('factsService', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl:'views/facts.html'
    //template:
  }

});
