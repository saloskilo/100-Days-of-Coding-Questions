
// **Question 97:** Write a function that returns the current date in the format "DD-MM-YYYY".
function returnDate() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    console.log(`[DD,MM,YYYY] : [${day}:${month}:${year}]`)
}
returnDate();
// **Question 98:** Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilNewYear() {
    // Get the current date
    const today = new Date();

    const currentYear = today.getFullYear();

    const nextNewYear = new Date(currentYear + 1, 0, 1);
    const timeDifference = nextNewYear - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    console.log(`There are ${daysLeft} days left until New Year.`);
}
daysUntilNewYear();

// **Question 99:** Generate a date object representing your next birthday and log it to the console.
function getNextBirthday(month, day) {
    const today = new Date();
    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, month, day);

    if (today > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, month, day);
    }

    return nextBirthday;
}

// Replace with your birthday month and day (e.g., August 15th)
const month = 2; // Jan (0-indexed)
const day = 3;

const nextBirthday = getNextBirthday(month, day);
console.log(`Your next birthday is on: ${nextBirthday.toDateString()}`);
