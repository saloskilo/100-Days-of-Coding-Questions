// **Question 118:** Write a loop that logs numbers from 1 to 10 to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// **Question 119:** Create a while loop that logs "Hello, World!" 5 times.
let i=1;
while (i<=5) {
    console.log('Hello,World');
    i++;
}   

// **Question 120:** Use a for...of loop to iterate through an array of your favorite movies and log each one.
// for_of loop 
var favorite_movies=['Spiderman','Kingdom of Heaven','Ashaqui 2'];
for (const i of favorite_movies) {
    console.log(i);
}
// for loop
for (let i = 0; i < favorite_movies.length; i++) {
    const elements = favorite_movies[i];
    console.log(elements);
}