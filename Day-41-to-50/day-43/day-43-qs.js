// **Question 127:** Convert a traditional function expression to an arrow function.
var traditionalFun = function (a, b) {
    return a + b
}
const arrow = (a, b) => a + b;
console.log(traditionalFun(1, 2));
console.log(arrow(1, 2));

// **Question 128:** Create an arrow function that takes multiple parameters and returns the product of all parameters.
const arrowwithMultipleoarameter = (...parameters) => {
    return parameters;
}
var product = arrowwithMultipleoarameter(2, 3, 4).reduce((pre, current) => { return pre * current })
console.log(product);
// **Question 129:** Explain how this behaves differently in arrow functions compared to traditional functions.
var _this = this;
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction(); 
traditionalVsArrow.arrowFunction()