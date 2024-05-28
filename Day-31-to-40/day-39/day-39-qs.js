// **Question 115:** Use a switch statement to log the days of the week based on a number (1-7).
function days(days) {
  switch (days) {
    case 1:
      console.log("Today is Sunday Weekend day");
      break;
    case 2:
      console.log("Today is Monday working day");
      break;
    case 3:
      console.log("Today is Suesday working 2nd day");
      break;
    case 4:
      console.log("Today is Wednesday working 3rd day");
      break;
    case 5:
      console.log("Today is Thursday working 4th day");
      break;
    case 6:
      console.log("Today is Friday working half day");
      break;
    case 7:
      console.log("Today is Saturday Weekend Here");
  }
}
days(1);
// **Question 116:** Create a switch case that matches several cases to the same code block, representing seasons.
function logSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Fall");
      break;
  }
}
logSeason(8);
// **Question 117:** Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function defaultCase(grade) {
  switch (grade) {
    case 80:
      console.log("You got A grade");
      break;
    default:
      console.log("Work Hard for A Grade");
  }
}
defaultCase(79);
