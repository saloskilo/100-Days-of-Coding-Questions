// **Q43** - Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//from day 14
var magicians = ["magician1", "magician2", "magician3"];
function show_magicians(params) {
  params.forEach((elements) => {
    console.log(elements);
  });
}
var magicians = ["magician1", "magician2", "magician3"];
function make_great(params) {
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    console.log(`${element} Great`);
  }
}
console.log("Orignal Magicians");
show_magicians(magicians);
console.log("Great Magicians");
make_great(magicians);

// **Q44** - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwichs() {
  var items = [];
  for (let i = 0; i < arguments.length; i++) {
    items[i] = arguments[i];
    console.log("Making sandwich with ".concat(items.join(",", ".")));
  }
}
make_sandwichs("ham", "cheese");
make_sandwichs("turkey", "lettuce", "tomato");

// **Q45** - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_carr(manufacturer, model_name) {
  options = [];
  for (let i = 2; i < arguments.length; i++) {
    options[i - 2] = arguments[i];
    console.log(
      `Manufacturer of the car is: ${manufacturer} and model name is: ${model_name} and optional are ${options}`
    );
  }
  car = {
    manufacturer: manufacturer,
    mode_name: model_name,
  };
  options.forEach((options) => {
    var key = options[0];
    value = options[1];
    return (car[key] = value);
  });
  return car;
}
console.log(make_carr("Toyota", "2024", ["color", "red"], ["year", 2020]));

//another
function make_car(manufacturer, model) {
  var options = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    options[_i - 2] = arguments[_i];
  }
  var car = { manufacturer: manufacturer, model: model };
  options.forEach(function (_a) {
    var key = _a[0],
      value = _a[1];
    return (car[key] = value);
  });
  return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
