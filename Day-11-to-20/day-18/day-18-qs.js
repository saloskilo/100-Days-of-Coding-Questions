
// **Q52** - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
var smartphone={
    brand:'samsung',
    model:'A71',
    specs:{
        storage:'128gb',
        screen:'6.4 inches',
        battery:'4000 mah'
    }
}
console.log(smartphone.specs.screen);
console.log(smartphone.specs)

// **Q53** - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var programmer={
    languages:['java','javascript','python'],
    tools:["Github", "Webpack", "postman"],
    framworks:['React','angular','bootstrap']
}
console.log(`I am learning ${programmer.languages[1]} with ${programmer.framworks[0]} and uplod my work on ${programmer.tools[0]}`)

// **Q54** - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
var userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);