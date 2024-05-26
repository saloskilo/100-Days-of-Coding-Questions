// **Q64** - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
function comStringswithnumber(age) {
  console.log(`Age : ${age}`);
  console.log("Age is:" + age);
}
comStringswithnumber(4);

// **Q65** - Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the `%` sign. For example, `remainder(5, 2)` should give `1`.
function reminder(value1, value2) {
  return value1 % value2;
}
console.log(reminder(2, 2));
console.log(reminder(5, 2));

// **Q66** - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say `true` if both are true, using the `&&` operator. For instance, `checkBothTrue(true, false)` should be `false`.
function booleanCheck(val1,val2) {
   return val1 && val2
}
console.log(booleanCheck(true,true));
console.log(booleanCheck(true,false));