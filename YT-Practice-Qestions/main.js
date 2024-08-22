// 1 Given a String, reverse each word in the String 
var str = "pakistan hamara mulk hai";
var newStr = str.split(" ").map((word) => {
    return word.split('').reverse().join('');
});;
console.log(newStr.join(' '));

console.log("<---------- Next Question ---------->");


// Q2: How to check if an object is an array or not ?
function checkIfArrayOrNot(elem) {
    console.log(Array.isArray(elem));
}
checkIfArrayOrNot([]);
checkIfArrayOrNot({});

console.log("<---------- Next Question ---------->");

// Q3: How to empty an array in Js ? 
// 1st method 
var arr = [1, 2, 4, 5, 6];
console.log(arr.length);
arr.length = 0;
console.log(arr.length);

// 2nd method 
var arr = [1, 2, 4, 5, 6];
for (let index = arr.length; index > 0; index--) {
    arr.pop();
}
console.log(arr.length);

// 3rd method 
var arr = [1, 2, 4, 5, 6];
arr = [];
console.log(arr.length);

console.log("<---------- Next Question ---------->");


// Q4: check wheather a number is integer or not 

var num = 3.1;
if (num % 1 == 0) {
    console.log("Integer");

} else {
    console.log("Not Integer");
}
// another way 
console.log(Number.isInteger(num));

console.log("<---------- Next Question ---------->");


// Q5: duplicate an array e.g= ([1,2,3,4]) // [1,2,3,4,1,2,3,4]
var array=[1,2,3,4];
console.log(array.concat(array));
// another way 
function duplicateArray(arr) {
    return newArray=[...arr,...arr]
}
console.log(duplicateArray(array));
console.log("<---------- Next Question ---------->");


// Q6: Reverse a Number 
function reverseNum(num) {
  return  Number(num.toString().split("").reverse().join(""))
}
console.log(reverseNum(21));
console.log("<---------- Next Question ---------->");

function palindrome(str) {
   
    let newStr=str.split("").reverse().join("");
   

    if (newStr==str) {
        console.log("Palindrome");
        
    }else{
        console.log("Not Palindrome");
        
    }
}
palindrome("lanf")
palindrome("lool")
console.log("<---------- Next Question ---------->");


// Q7: function to return string in alphabatical order 
function alphabaticalOrder(str) {
   return str.split("").sort().join("")
}
console.log(alphabaticalOrder("qwerty"));
console.log(alphabaticalOrder("salman"));

console.log("<---------- Next Question ---------->");


// Q8: function that return the first letter of the string in uppercase
function upperCaseofStr(str) {
   return str.split(" ").map((elem)=>{
     return    elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
    }).join(' ');
    
}
console.log(upperCaseofStr("this is salman"))
console.log("<---------- Next Question ---------->");
