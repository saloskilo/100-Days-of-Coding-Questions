

// **Q10** - Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Salman ALi date: 5/19/2024
// adding
console.log(5 + 3);
// substraction
console.log(10-2);
// mutiplication
console.log(4*2);
// division
console.log(16/2);

// **Q11** - Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names=['salman','ali','khan','mansoor'];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
   console.log(element);
}


// **Q12** - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var msg=" is my best friend";
var names=['salman','ali','khan','mansoor'];
for (let i = 0; i < names.length; i++) {
    const element = names[i].concat(msg);
   console.log(element);
}
// console.log(names[0].concat(" ",msg));
// console.log(names[1].concat(" ",msg));
// console.log(names[2].concat(" ",msg));
// console.log(names[3].concat(" ",msg));

