var app = angular.module('crushMod');

app.factory('factsFactory', function($http){
  var facts = [];

  function setFacts(category) {
    var promise = $http({
      method: 'GET',
      url: 'https://matchilling-chuck-norris-jokes-v1.p.mashape.com/jokes/search?query=' + category,
      headers: {
        "X-Mashape-Key": "eRTllO9OaOmshQcyTPoYwPvnISj6p1DTRv2jsnildyYtFIy3tq",
        "Accept": "text/plain"
      }
    }).then(function successCallback(response) {
      //log the API info
      console.log(response.data);
      facts = response.data;
    }, function(error) {
      console.log(error);
      })
      return promise;
  }

  function getFacts() {
    return facts;
  }

  return {
    setFacts: setFacts,
    getFacts: getFacts
  }
});
