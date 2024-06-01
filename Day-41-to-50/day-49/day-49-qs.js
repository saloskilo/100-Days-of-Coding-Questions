// **Question 145:** Create a function that accepts a callback and invokes it with some arguments.
function invokeCallBack(callbackFun) {
  callbackFun();
}
function callbackFun() {
  console.log("Hello");
}
function add(a, b) {
  console.log(a + b);
}
invokeCallBack(callbackFun);
invokeCallBack(() => {
  add(4, 6);
});

// **Question 146:** Show an example of a callback function used to filter an array of numbers.
var array = [1, 2, 3, 4, 5, 6, 7];
var newArray = array.filter((newArray) => {
  if (newArray % 2 == 0) {
    console.log(newArray);
  }
});
console.log(newArray);
// **Question 147:** Explain how to handle errors in a callback pattern.
function fetchData(callback) {
  var error = new Error("Failed to fetch data");
  var data = "Some data";
  if (Math.random() > 0.5) {
    callback(null, data);
  } else {
    callback(error); 
  }
}
// Using the fetchData function with error handling in the callback
fetchData(function (error, data) {
  if (error) {
    console.error(error.message); // Handles the error
  } else {
    console.log(data); // Processes the data
  }
});
