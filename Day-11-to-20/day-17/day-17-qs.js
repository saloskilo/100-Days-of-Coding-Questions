// **Q49** - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function hobbies(...hobbies) {
    hobbies.forEach((hobby) => {
        console.log(`Enjoy ${hobby} `)
    })
}
hobbies('cricket', 'footbal', 'hockey')

// **Q50** - Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

var myIdealDay = `My ideal day would involve:\n1. Waking up early and going to university.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by reading a good book.`;

console.log(myIdealDay);


// **Q51** - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// orignal function 
function areaofRectengle(length,width){
    return length*width;
}
// arrow function 
var areaOfRectengle=function (length,width){
    return console.log(length*width)
}
// also can write like this 
areaOfRectengle=(length,width)=>{
      return console.log(length*width)
}

areaOfRectengle(23,21);