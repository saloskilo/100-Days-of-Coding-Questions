// **Question 88:** Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.
function stringToNumber(str) {
  console.log(`Before Change type of ${str} : ${typeof str}`);
  console.log(`After Change type of ${str} : ${typeof Number(str)}`);
}
stringToNumber("123");

// **Question 89:** Rounding Numbers: Create a function that takes a number with decimals (e.g., `3.14159`) and rounds it to two decimal places.
function roundToTwoDecimalPlaces(num) {
  return num.toFixed(2);
}
console.log(roundToTwoDecimalPlaces(45.343223));

// **Question 90:** Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.
function random_Number() {
  return Math.floor(Math.random() * 11);
}
console.log(random_Number());
