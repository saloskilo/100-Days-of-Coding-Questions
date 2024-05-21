
// **Q22** - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let array=['Ali','Khan','Haider']
console.log(array[3]);
array[2]='Haider';
console.log(array[2]);

// **Q23** - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// ```
// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')


// - Look closely at your results, and make sure you understand why each line evaluates to True or False.

// - Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Tests that evaluate to True
console.assert(5 + 3 === 8, "Test 1 True");
console.assert("hello".length === 5, "Test 2 True");
console.assert([1, 2, 3].indexOf(2) !== -1, "Test 3 True");
console.assert(typeof 42 === "number", "Test 4 True");
console.assert({}.toString() === "[object Object]", "Test 5 True");

// Tests that evaluate to False
console.assert(5 - 3 === 1, "Test 6 Failed");
console.assert("hello".length === 4, "Test 7 Failed");
console.assert([1, 2, 3].indexOf(4) !== -1, "Test 8 Failed");
console.assert(typeof 42 === "string", "Test 9 Failed");
console.assert({}.toString() === "[object Array]", "Test 10 Failed");

// **Q24** - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// - Tests for equality and inequality with strings

// - Tests using the lower case function

// - Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// - Tests using "and" and "or" operators

// - Test whether an item is in a array

// - Test whether an item is not in a array

// Tests that Evaluate to True

// Test if a number is in an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.assert(numbers.includes(3), "Test 1 Failed: 3 should be in the array");

// Test if a string is in an array of strings
let fruits = ["apple", "banana", "cherry"];
console.assert(fruits.includes("banana"), "Test 2 Failed: 'banana' should be in the array");

// Test if an object is in an array of objects by reference
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };
let people = [obj1, obj2];
console.assert(people.includes(obj1), "Test 3 Failed: obj1 should be in the array");

// Test if a boolean value is in an array
let bools = [true, false, true];
console.assert(bools.includes(false), "Test 4 Failed: false should be in the array");

// Test if a specific element is in an array of mixed types
let mixedArray = [1, "hello", true, null];
console.assert(mixedArray.includes("hello"), "Test 5 Failed: 'hello' should be in the array");

// Tests that Evaluate to False

// Test if a number is not in an array of numbers
console.assert(!numbers.includes(6), "Test 6 Failed: 6 should not be in the array");

// Test if a string is not in an array of strings
console.assert(!fruits.includes("orange"), "Test 7 Failed: 'orange' should not be in the array");

// Test if a different object with the same structure is not in an array of objects
let obj3 = { name: "Alice" };
console.assert(!people.includes(obj3), "Test 8 Failed: obj3 should not be in the array");

// Test if `undefined` is not in an array of defined values
let definedValues = [1, "hello", true, null];
console.assert(!definedValues.includes(undefined), "Test 9 Failed: undefined should not be in the array");

// Test if a specific element is not in an array of mixed types
console.assert(!mixedArray.includes("world"), "Test 10 Failed: 'world' should not be in the array");
