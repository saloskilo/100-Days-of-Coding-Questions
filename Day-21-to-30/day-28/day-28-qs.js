// **Question 82:** Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function length(str) {
  console.log(str.length);
}
length("my name is Salman");
// **Question 83:** Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function upper_and_lower(str) {
  console.log(`Orignal Text: ${str}`);
  var lower = str.toLowerCase();
  console.log(`Lowercase: ${lower}`);
  var upper = str.toUpperCase();
  console.log(`Lowercase: ${upper}`);
}
upper_and_lower("qwertyuiop  ASDFGHJKL");
// **Question 84:** Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replacing(sentence) {
  console.log(sentence.replace("javascript", "typescript"));
}
replacing("I love javascript very much;");
