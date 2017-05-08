var app = angular.module('apiName');
app.controller('nameOfController', function($scope, $http){
console.log("hello from the controller");
$http.get('http://nameifAPIsite.com' + something + '.json').then(function(response){
//log the API info
  console.log(response.data.data.children);
})
$scope.posts = response.data.data.children;
console.log($scope.posts);
});
