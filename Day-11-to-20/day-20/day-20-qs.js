// **Q58** - Write a simple program that can take lots of scores and find their average.
function lotofScore(...scores) {
  console.log(scores);
  var avg = scores.reduce((sum, total) => sum + total / scores.length, 0);
  console.log(`Average for the given number is: ${avg}`);
}
lotofScore(88, 90, 34, 45, 65);

// **Q59** - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function adder(specificNumber) {
  return function (numbertoadded) {
    return specificNumber + numbertoadded;
  };
}
const five = adder(5)(5);
const ten = adder(10)(10);
console.log(five, ten);

// **Q60** - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
(function profile(myName, myAge) {
  console.log(`${myName},${myAge}`);
})("salman", 24);

((name, age) => {
  console.log(name, age);
})("Salman", 24);
