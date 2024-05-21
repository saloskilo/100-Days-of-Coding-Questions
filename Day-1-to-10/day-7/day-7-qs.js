// **Q19** - Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guests=['salman','ali','khitab','umar']
console.log("I would like to invite "+guests.length+" People to Dinner");

// **Q20** - Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries=['China','Germany','France','England','Canada'];
console.log("I would like to visit "+countries.length+" Countries in all over the world");

// **Q21** - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var person={
    fname:'salman',
    lname:'ali',
    id_:1234,
    program:'BSSE',
}
console.log('First name of the person is '.concat(person.fname," and last name of the person is ",person.lname," with id ",person.id_," and he is a student of ",person.program));