// **Question 70:** Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('---------------------');
// **Question 71:** Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not. Try to reassign a `const`-declared variable and catch the error.
let value1 = 4;
console.log(value1);
value1 = 5;
console.log(value1);
console.log('---------------------');

const value2=5;
console.log(value2)
// error occured 
// value2=6
// console.log(value2)

// **Question 72:** Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `{}` that uses both `let` and `const`. Show how variables declared inside the block are not accessible outside of it.
console.log('----------Q:72----------');

function block() {
    let a=5;
    const b=4;
    console.log(a,b);

    function inside() {
    let a=3;
    let b=7;
        console.log(a,b);
    }
}
block();