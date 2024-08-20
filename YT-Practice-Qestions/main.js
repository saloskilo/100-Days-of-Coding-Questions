// 1 Given a String, reverse each word in the String 
var str="pakistan hamara mulk hai";
var newStr=str.split(" ").map((word )=> {
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
var arr=[1,2,4,5,6];
console.log(arr.length);
arr.length=0;
console.log(arr.length);

// 2nd method 
var arr=[1,2,4,5,6];
for (let index = arr.length; index >0 ; index--) {
    arr.pop();
}
console.log(arr.length);

// 3rd method 
var arr=[1,2,4,5,6];
arr=[];
console.log(arr.length);

console.log("<---------- Next Question ---------->");
