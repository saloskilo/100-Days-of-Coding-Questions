// **Question 109:** Write an if statement that logs "Good Morning" if the current time is before 12 PM.
function goodMorning() {
    let d = new Date();
    let t = d.getHours;
    if (t < 12) {
        console.log('Good Morning')
    } else {
        console.log('Good Afternoon')
    }
}
goodMorning()
// **Question 110:** Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function checkGrade(numbersOutOfHundread) {
    if (numbersOutOfHundread >= 80) {
        console.log('A+ Grade');
    } else if (numbersOutOfHundread >= 70) {
        console.log("A Grade");
    } else if (numbersOutOfHundread >= 60) {
        console.log("B Grade");
    } else if (numbersOutOfHundread >= 50) {
        console.log('C Grade');
    } else if (numbersOutOfHundread >= 40) {
        console.log('D Grade');
    } else {
        console.log('F Grade Fail');
    }
}
checkGrade(50);
checkGrade(78);
// **Question 111:** Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function checkAgeGroup(age) {
    if (age <= 10) {
        console.log('Child');
    } else if (age <= 30) {
        console.log('Teenager');
    } else {
        console.log("Adult");
    }
}
checkAgeGroup(55)