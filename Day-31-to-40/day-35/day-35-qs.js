// **Question 103:** Write a function that returns a random boolean value, true or false.
function randomBoolean() {
    var randomTrueFalse = Math.random() >= 0.5;
    console.log(randomTrueFalse)
}
randomBoolean();

// **Question 104:** Create a function that generates a random hexadecimal color code.
const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    // .slice method return new array from start to end which we selected
    return '#' + n.slice(0, 6);
  };
  
 console.log(randomHexColorCode());  // '#e34155'
// **Question 105:** Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function dice() {
    var dice=Math.floor((Math.random()*6)+1);
    console.log(dice)
}
dice();