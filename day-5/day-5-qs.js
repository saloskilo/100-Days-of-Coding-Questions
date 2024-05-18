
// **Q13** - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var transportation =["motercycle",'car','bus','train'];
// this is for a single item
console.log(" ".concat(`i would like to own a ${transportation[0]}`));

// using foreach loop
transportation.forEach(function(transport,index){
    console.log(index+" I would like to own a ".concat(`${transport}`));
})

// using for loop
for (let i = 0; i<= transportation.length; i++) {
  console.log("I would like to own a ".concat(transportation[i]));
    }




// **Q14** - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var people=['Ali','khan','mansoor'];
people.forEach(people => {
    console.log("Dear "+people.concat(" ","would you like to come to dinner?"));
    
});

// **Q15** - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:

// - Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// - Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// - Print a second set of invitation messages, one for each person who is still in your list.
console.log(people[0].concat(" ","cannot come to dinner"));
people[0]='Sarim';
people.forEach((people)=>{
    console.log("Dear "+people.concat(" ",'would you like to come to dinner'));
})