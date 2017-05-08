var app = angular.module('apiModule');

app.service('nameOfFactory', function(?goes here){
// var something = [];
$http ({
  method: 'GET',
  url: '',
  params: {};
  .then(function(response){
    console.log(response.data);
  });
})

})
