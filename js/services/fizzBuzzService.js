var app = angular.module("crushMod");


app.factory('buzzyFactory', function(){
  console.log("hi")
var input = ""
return {

  setInput:  function (number){
    if (number % 15 == 0) {
      input = "FizzBuzz";
      console.log(input);
    }
    else if (number % 3 == 0) {
      input = "Fizz";
    }

    else if (number % 5 == 0) {
      input = "Buzz";
    }
    else {
        input = "neither fizzing, buzzing, or fizzbuzzing";
    }

},
  getInput: function () {
    console.log(input);
    return input
  }
}
});
