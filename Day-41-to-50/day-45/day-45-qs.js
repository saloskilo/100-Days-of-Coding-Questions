// **Question 133:** Write a JavaScript object and convert it into a JSON string.
var obj = {
    name: 'Salman',
    id: 48517,
    address: 'clifton'
}
var toString = JSON.stringify(obj);
console.log(toString);
// **Question 134:** Take a JSON string and parse it into a JavaScript object.

var jsonString = '{"Name":"salman","Id":"48517"}'
var toObject = JSON.parse(jsonString);
console.log(toObject);

// **Question 135:** Explain how you can format a JSON string with proper indentation for readability.
var person = {
    name: "KHAN",
    age: 23,
    city: "KARACHI",
};
var jsonString = JSON.stringify(person, null, 4); 
console.log(jsonString);
