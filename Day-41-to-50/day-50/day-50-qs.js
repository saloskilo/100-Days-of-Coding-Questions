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








// YT Practice
console.log("Start");
setTimeout(() => {
    for (let index = 1; index < 10; index++) {

        console.log(index);

    }
}, 2000);
console.log("end");
const [a] = [10, 20, 49];
console.log(a);
var x = 20;
function foooo() {
    console.log(x);
    // var x=10;

}
foooo();
const arr = ["salman", "ali", "khan"];

let newValue = document.querySelector("#hello");

let value = 0;  // Corrected to 'let' to be consistent with reassignment

function fooo() {
    // Displaying the whole string at the current index
    newValue.innerText = arr[value];
    value++;

    // Resetting the value to 0 after reaching the end of the array
    if (value >= arr.length) {
        value = 0;
    }
}

newValue.addEventListener("click", () => {
    fooo();
});

let dev = document.querySelector(".container");
let data = [];
const foo = async () => {
    try {
        let url = "https://jsonplaceholder.typicode.com/users";

        let res = await fetch(url);
        let dataa = await res.json();
        data = dataa;

        data.forEach((user) => {
            console.log(user);
            let div1 = document.createElement("div");
            div1.textContent = user.id;
            dev.appendChild(div1);
        });

        // console.log(data);
    } catch (error) {
        console.log(error);
    }
};

foo();


console.log(4 + true);

console.log(1 < 2 < 3 < 4 > 5);
console.log(true > false);


