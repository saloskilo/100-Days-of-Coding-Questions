// **Q67** - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.
function sum(num, numString) {
  return num + Number(numString);
}
console.log(sum(1, "4"));
// **Q68** - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function product(dec1, dec2) {
  return Math.round(dec1 * dec2 * 100) / 100;
}
console.log(product(2.24, 4.543));

// **Q69** - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function devide(devidend,devider) {
    // Math.floor is to change the value from dec to Number 
    var quotient=Math.floor(devidend / devider);
    var reminder=devidend % devider;
    return {quotient:quotient,reminder:reminder}
}
console.log(devide(10,3));