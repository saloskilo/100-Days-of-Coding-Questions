// **Question 85:** Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function checkPosition(str) {
  return str.indexOf("code");
}
console.log(checkPosition("my name is salman and i love to code"));
// **Question 86:** Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return `true` if found, otherwise `false`.
function checkString(str) {
  console.log(str.includes("salman"));
}
checkString("My name i salman and love to code");
// **Question 87:** Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function subtractString(str) {
  console.log(str.substring(0, 17));
  console.log(str.substring(17, 35));
}
subtractString("My name is Salman and i love to code");
