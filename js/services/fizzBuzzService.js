var app = angular.module("crushMod");


app.factory('buzzyFactory', function(){
  console.log("hi")
var input = ""
return {

  setInput:  function (number){
    if (i % 15 == 0) {
      input = "FizzBuzz";
    }
    else if (i % 3 == 0) {
      input = "Fizz";
    }

    else if (i % 5 == 0) {
      input = "Buzz"
    }
    else {
        input = i
    }

},
  getInput: function () {
    return input
  }
}
});
