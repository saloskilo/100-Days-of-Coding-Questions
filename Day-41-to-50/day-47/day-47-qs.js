// **Question 139:** List three reserved words in JavaScript and create a valid use case for each.
const PI = 3.14159;
const radius = 5;
const area = PI * radius * radius;
console.log(`The area of the circle is: ${area}`);


const age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


function calculateSquare(number) {
    return number * number;
}
const result = calculateSquare(4);
console.log(`The square of 4 is: ${result}`);


// **Question 140:** Explain the error that occurs when trying to use a reserved word as a variable name.
// we cannot use reserved words in a varible name
try {
  console.log(name)
} catch (error) {
    console.log('name is not defined');
}

// **Question 141:** Discuss the significance of the await reserved word in asynchronous JavaScript.
// . It makes JavaScript wait for the promise object to settle before running the code in the next line.