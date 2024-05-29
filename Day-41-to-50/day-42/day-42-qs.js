// **Question 124:** Create a function inside an object that returns the object's own name property using the this keyword.
var obj = {
    name: 'salman',
    id: '48517',
    detail: function detail() {
        return this.name
    }
}
console.log(obj.detail());

// **Question 125:** Modify a method in an object to use the this keyword to access another property in the same object.
var obj2 = {
    value1: 45,
    value2: 10,
    sum: function sum() {
        return this.value1 + this.value2;
    }
}
console.log(obj2.sum());
// **Question 126:** Explain how the this keyword changes its value when used inside a nested function within a method.
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();