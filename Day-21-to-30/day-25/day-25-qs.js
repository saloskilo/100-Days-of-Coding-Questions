
// **Question 73:** Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function letWork() {
    let value=3;
    console.log(value);
    value=4;
    console.log(value);
}
letWork();
// **Question 74:** Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables `a = 5` and `b = 10`, then swap their values so that `a` becomes `10` and `b` becomes `5`.
function swipeNumbers() {
    let a=5;
    let b=10;
    console.log(a,b);
    // using Destructure 
    [a,b]=[b,a]
    console.log(a,b);
    // by adding 3rd variable
    let c=b;
    b=a;
    a=c;
    console.log(a,b);
    // without a third variable
    a=a+b; //5+10= 15
    b=a-b;// 15-10=5
    a=a-b // 15-5=10
    console.log(a,b);
}
swipeNumbers()
// **Question 75:** Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, division) on `x` using compound operators.
function compoundOperator() {
    let x=4;
    console.log(`Initial Value : ${x}`);
    x+=2;
    console.log(`By Adding 2 x value: ${x}`);
    x-=4;
    console.log(`By subtractiong 4 x value : ${x}`);
    x*=2;
    console.log(`By mutiplying 2 x value: ${x}`);
    x/=2;
    console.log(`By dividing 2 x value: ${x}`);
}
compoundOperator()