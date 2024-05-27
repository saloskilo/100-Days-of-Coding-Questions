// **Question 91:** Create an array of your three favorite fruits and add a new fruit to the end of the array.
var fruits = ['Apple', 'Banana', 'Orange'];
fruits.push('Cherry');
console.log(fruits);

// **Question 92:** Write a function to remove the last element from an array and return the removed element.
function removeItem(fruits) {
    return fruits.pop();
}
console.log(removeItem(['apple', 'banana', 'orange', 'cherry']));
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "orange"];
replaceBananaWithMango(fruits);
console.log(fruits);

