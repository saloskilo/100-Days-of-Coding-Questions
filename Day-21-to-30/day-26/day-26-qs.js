// **Question 76:** Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
// we have to create a variable to add the return value in it,
var addedvalue = function (val1, val2) {
  var sum = val1 + val2;
  return sum;
};
console.log(addedvalue(2, 2));
// **Question 77:** Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function user(name) {
  if (name === void 0) {
    name = "Salman";
  }
  console.log(`Hello ${name}`);
}
user();
user("Khan");
// **Question 78:** Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function declarations(number) {
  let square = number * number;
  console.log(square);
}
declarations(5);

var expressions = function (number) {
  let square = number * number;
  return square;
};
console.log(expressions(5));
