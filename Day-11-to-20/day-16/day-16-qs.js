// **Q46** - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "lenovo",
    model: "i7",
    year: "2022",
    decribe: function () {
        console.log(
            `The laptop is from ${this.make} company`
                .concat(" the model is ", this.model)
                .concat(" and it manufactured in the year ", this.year)
        );
    },
};
laptop.decribe();
// **Q47** - Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    {
        make: "lenovo",
        model: "i7",
        year: "2022",
    },
    {
        make: "samsung",
        model: "i5",
        year: "2023",
    },
    {
        make: "dell",
        model: "i9",
        year: "2023",
    },
];
let [laptop1, laptop2, laptop3] = laptops;
console.log("Laptop 1: " + laptop1.make + "\nLaptop 2: " + laptop2.make);

// **Q48** - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var lap1 = [100, 400, 34, 7554, 654, 224, 754, 900]
var lap2 = [43, 345, 332, 124, 432, 4234, 342, 34];

let combinearray = [...lap1, ...lap2].sort((a,b)=>a-b)
console.log(combinearray)