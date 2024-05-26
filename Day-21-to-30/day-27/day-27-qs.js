// **Question 79:** Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
let car = {
  make: "Toyota",
  model: "2022",
  year: 2018,
};
console.log(car.model);
// **Question 80:** Updating Object Properties: Add a property named `color` to the existing car object, and then update the `year` property to `2021`. Show how to perform these operations.
car.model = "2021";
car.color = "Red";
console.log(car);
// **Question 81:** Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function object(obj) {
  console.log(obj);
}
object({ name: "Salman", id: 48517 });
