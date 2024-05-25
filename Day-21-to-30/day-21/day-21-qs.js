// **Q61** - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
  VehicleType[(VehicleType["Car"] = 0)] = "Car";
  VehicleType[(VehicleType["Truck"] = 1)] = "Truck";
  VehicleType[(VehicleType["Motorcycle"] = 2)] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.


// **Q62** - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
class student {
  constructor(name, age, classes) {
    this.name = name;
    this.age = age;
    this.classes = classes;
  }
}
var student1 = new student("Salman", 23, ["Bio", "Che", "Pro"]);
console.log(student1);

// **Q63** - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5,
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20,
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
