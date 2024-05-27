// **Question 94:** Use the .map() method to create a new array that contains the length of each word from an array of words.
var array = ['salman', 'ali', 'khan'];
var new_array = array.map((newarray) => {
    return newarray.length;
})
console.log(new_array);
// **Question 95:** Write a function that uses the .filter() method to return an array of numbers greater than 10.
var numbers = [2, 43, 2, 4, 4, 12, 432, 432, 1, 34, 54, 6, 7, 8, 3, 23, 65, 4];
function greaterthan(array) {
    var greaterthan10number = array.filter((new_array) => {
        return new_array > 10
    })
    return greaterthan10number
}
console.log(greaterthan(numbers));
// **Question 96:** Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var sumOfNumbers=numbers.reduce((prev,current)=>{
    return prev+current;
},0)
console.log(sumOfNumbers)