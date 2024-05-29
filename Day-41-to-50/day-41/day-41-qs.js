
// **Question 121:** Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i == 5)
        continue
    console.log(i)
}
// **Question 122:** Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
var counter = 10;
while (counter > 0) {
    if (counter === 5) {
        break; 
    }
    console.log(counter);
    counter--; 
}
// **Question 123:** Create a loop that iterates through a string and stops when it finds the first vowel.
function stopOnVowel(str) {
    var vowels='aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        const allstr = str[i];
        if (vowels.includes(allstr)) {
            console.log("First vowel found: ".concat(allstr));
            break; // Stops the loop at the first vowel found
        }
        console.log(allstr); 
    }
}
stopOnVowel('sphytai')