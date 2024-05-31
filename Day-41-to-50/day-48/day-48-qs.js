// **Question 142:** Create a Promise that resolves with "Hello, World!" after 2 seconds.
var prom = new Promise(function prom(resolve, reject) {
    setTimeout(() => {
        var value = true;
        if (value==true) {
            resolve('Hello,World'); 
        } 
    }, 2000);
});
prom.then((result) => {
    console.log(result);
}).catch((error) => { console.log(error); })
console.log('--------------------------')
// **Question 143:** Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var prom = new Promise(function prom(resolve, reject) {
    setTimeout(() => {
        var value = false;
        if (value==true) {
            resolve('Hello,World'); 
        } else {
            reject('Error occured');
        }

    }, 2000);
});
prom.then((result) => {
    console.log(result);
}).catch((error) => { console.log(error); })
// **Question 144:** Explain the use of the Promise.all() method with an example.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});