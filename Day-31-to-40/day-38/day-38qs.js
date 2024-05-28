// **Question 112:** Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
var countries = new Map();
countries.set('Pakistan', 'Islamabad');
countries.set('Canada', 'Toronto');
countries.set('Afghanistan', 'Kabul');
console.log(countries);
console.log(typeof countries);

// **Question 113:** Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function check(countries) {
    if (countries.has('Canada')) {
        console.log(`The capital of Canada is : ${countries.get('Canada')}`);
    } else {
        console.log('Canada not found');
    }
}
check(countries);

// **Question 114:** Iterate over a Map of student IDs and names, and log each pair to the console.
var students = new Map();
students.set(1, "salman");
students.set(2, "khan");
students.set(3, "jibran");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});


const entries = Array.from(students);

// Iterate over the array using a for loop
for (let i = 0; i < entries.length; i++) {
    const [studentID, studentName] = entries[i];
    console.log(`Student ID: ${studentID}, Student Name: ${studentName}`);
}
