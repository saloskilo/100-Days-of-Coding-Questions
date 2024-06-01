// **Question 148:** Demonstrate the use of the setTimeout() function to execute code after a delay.
function executeafterdelayFun() {
  console.log("Step: 1");
  setTimeout(() => {
    // this will wait for two seconds and will be executed in last
    console.log(
      "Step: 2 (In the end because of time due to asyncronous programming)"
    );
  }, 2000);
  console.log("Step: 3");
}
executeafterdelayFun();
// **Question 149:** Explain the concept of the event loop in JavaScript with an example.
// we can check this live practical in Loupe Website
console.log("Star Q : 149");
setTimeout(() => {
  console.log("This will goes in webAPI for the time to move to event loop");
}, 1000);
console.log("End");
// **Question 150:** Describe how asynchronous callbacks differ from synchronous code execution.
// syncronous wait for the execution while asynchronoues moved to the next part of the code to remove blocking
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (var i = 0; i < 1e9; i++) {} // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(function () {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
