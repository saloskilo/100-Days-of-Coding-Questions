// **Q16** - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:
// - Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// - Add one new guest to the beginning of your array.
var guests=['Ali','khan','mansoor'];
console.log("I found a bigger dinner table");
guests.unshift('Waqas');
guests.forEach(guests => {
    console.log(guests);
});
console.log("----------------------------------");

// - Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
guests.push("zahid");
guests.forEach((guests,index) => {
    console.log(index+" "+guests);
});
guests.splice(guests.length/2,0,'muzammil');
guests.forEach((guests,index )=> {
    console.log(index+' '+guests);
});
console.log("----------------------------------");

// - Print a new set of invitation messages, one for each person in your list.
guests.forEach((guests,index)=>{
     console.log(index+" Dear "+guests.concat(' ',"would you like to come to dinner"))
})
console.log("----------------------------------");


// **Q17** - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// - Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("I can invite only two people for dinner");
console.log("----------------------------------");

// - Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length>2) {
    var removeGuest=guests.pop();
    console.log("Sorry ".concat(removeGuest,' i cannot invite you for the dinner'))
    
}

console.log("----------------------------------");
// - Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach((guests)=>{
    console.log(guests.concat(' You are Still Invited To Dinner'));

})
console.log("----------------------------------");

// - Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (guests.length>0) {
    guests.pop();
    console.log("List is empty: "+guests);
}
console.log("----------------------------------");
guests.forEach((guest)=>{
    console.log("LIST IS EMPTY"+guest)
})
console.log("----------------------------------");


// **Q18** - Seeing the World: Think of at least five places in the world you’d like to visit.
// - Store the locations in a array. Make sure the array is not in alphabetical order.

var places=['Dubai','Moldives','Toronto','Swat','Paras'];
console.log("----------------------------------");

// - Print your array in its original order.
places.forEach((places)=>{
console.log("Orignal Array "+places);
})
console.log("----------------------------------");

// - Print your array in alphabetical order without modifying the actual list.
places.sort();
places.forEach((places)=>{
    console.log("Alphabatical Order: "+places)
})
console.log("----------------------------------");

// - Show that your array is still in its original order by printing it.
var places=['Dubai','Moldives','Toronto','Swat','Paras'];
places.forEach((places)=>{
    console.log("Orignal Form"+places);
})
console.log("----------------------------------");



// - Print your array in reverse alphabetical order without changing the order of the original list.
places.reverse();
places.forEach((places)=>{
    console.log("Reverse Form "+places);
});
console.log("----------------------------------");

// - Show that your array is still in its original order by printing it again.
var places=['Dubai','Moldives','Toronto','Swat','Paras'];
places.forEach((places)=>{
    console.log("Orignal Array "+places);
});
console.log("----------------------------------");

// - Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
places.forEach((places)=>{
    console.log("Reverse Array "+places);
});
console.log("----------------------------------");
// - Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
places.forEach((places)=>{
    console.log("Orignal Array back again "+places);
});
console.log("----------------------------------");
// - Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
places.forEach((places)=>{
    console.log("Sorted Array "+places);
});
console.log("----------------------------------");

// - Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse();
places.forEach((places)=>{
    console.log("Reverse sort Array "+places);
});
console.log("----------------------------------");