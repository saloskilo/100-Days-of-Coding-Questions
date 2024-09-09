// 1 Given a String, reverse each word in the String 
var str = "pakistan hamara mulk hai";
var newStr = str.split(" ").map((word) => {
    return word.split('').reverse().join('');
});;
console.log(newStr.join(' '));

console.log("<---------- Next Question ---------->");


// Q2: How to check if an object is an array or not ?
function checkIfArrayOrNot(elem) {
    console.log(Array.isArray(elem));
}
checkIfArrayOrNot([]);
checkIfArrayOrNot({});

console.log("<---------- Next Question ---------->");

// Q3: How to empty an array in Js ? 
// 1st method 
var arr = [1, 2, 4, 5, 6];
console.log(arr.length);
arr.length = 0;
console.log(arr.length);

// 2nd method 
var arr = [1, 2, 4, 5, 6];
for (let index = arr.length; index > 0; index--) {
    arr.pop();
}
console.log(arr.length);

// 3rd method 
var arr = [1, 2, 4, 5, 6];
arr = [];
console.log(arr.length);

console.log("<---------- Next Question ---------->");


// Q4: check wheather a number is integer or not 

var num = 3.1;
if (num % 1 == 0) {
    console.log("Integer");

} else {
    console.log("Not Integer");
}
// another way 
console.log(Number.isInteger(num));

console.log("<---------- Next Question ---------->");


// Q5: duplicate an array e.g= ([1,2,3,4]) // [1,2,3,4,1,2,3,4]
var array = [1, 2, 3, 4];
console.log(array.concat(array));
// another way 
function duplicateArray(arr) {
    return newArray = [...arr, ...arr]
}
console.log(duplicateArray(array));
console.log("<---------- Next Question ---------->");


// Q6: Reverse a Number 
function reverseNum(num) {
    return Number(num.toString().split("").reverse().join(""))
}
console.log(reverseNum(21));
console.log("<---------- Next Question ---------->");

function palindrome(str) {

    let newStr = str.split("").reverse().join("");


    if (newStr == str) {
        console.log("Palindrome");

    } else {
        console.log("Not Palindrome");

    }
}
palindrome("lanf")
palindrome("lool")
console.log("<---------- Next Question ---------->");


// Q7: function to return string in alphabatical order 
function alphabaticalOrder(str) {
    return str.split("").sort().join("")
}
console.log(alphabaticalOrder("qwerty"));
console.log(alphabaticalOrder("salman"));

console.log("<---------- Next Question ---------->");


// Q8: function that return the first letter of the string in uppercase
function upperCaseofStr(str) {
    return str.split(" ").map((elem) => {
        return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
    }).join(' ');

}
console.log(upperCaseofStr("this is salman"))
console.log("<---------- Next Question ---------->");

// Q9: occurence of character in a string
function occurenceOfCharacters(str) {
    console.log(str);

    str.toLowerCase();
    var occurences = {};
    str.split("").forEach(element => {
        if (occurences.hasOwnProperty(element) === false) {
            occurences[element] = 1;
        } else {
            occurences[element]++;
        }
    });
    return occurences;
}
// another way 
function countOccurrences(str) {
    let result = {};

    // Convert the string to lowercase if you want the count to be case-insensitive
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // If the character is already in the result, increment its count
        if (result[char]) {
            result[char]++;
        } else {
            // If the character is not in the result, add it with a count of 1
            result[char] = 1;
        }
    }

    return result;
}

console.log(occurenceOfCharacters("salman"));
console.log(countOccurrences("salman"));
console.log("<---------- Next Question ---------->");


//Q10: loop an array and add all elements of array 
var arr = [1, 2, 3, 4, 5];
var sum = 0;
var newValue = arr.forEach((elem) => (sum += elem));
console.log(sum);

var arr = [1, 2, 3, 4, 5];
var newValue = arr.reduce((cur, next) => {
    return cur + next;
});
console.log(newValue);
console.log("<---------- Next Question ---------->");

// Q11: added only those which are type of number
var arr = [1, 2, 'salo', 3, "khan", 3];
sum = 0;
var newArr = arr.forEach((elem) => {
    if (typeof elem === 'number') {
        sum += elem
    }
});
console.log(sum);
console.log("<---------- Next Question ---------->");


// Q12: array of objects and remove all which dont has gender value male 
var arrayOfObjects = [
    { name: "salman", age: 20, gender: "male" },
    { name: "ali", age: 20, gender: "male" },
    { name: "nadia", age: 20, gender: "female" },
    { name: "khan", age: 20, gender: "male" },
    { name: "Muskan", age: 17, gender: "female" }
];

arrayOfObjects.filter((elem) => {
    if (elem.gender === "female") {
        console.log(elem);

    }
});
console.log("<---------- Next Question ---------->");


// Q13: function to tell the type of any passed arguments
var dataType = function typeTeller(args) {
    return typeof args;
};
console.log(dataType(2));
console.log(dataType("salman"));
console.log(dataType([1]));
console.log(dataType({}));
console.log(dataType(true));
console.log(dataType(NaN));
console.log(dataType(undefined));
console.log(dataType(dataType));
console.log("<---------- Next Question ---------->");

// Q14: retrive array of first n number of an array 
function retriveArray(arr, n = 0) {
    if (n > arr.length) {
        console.log(n + " thu elements he nhi hai");

    } else {
        for (let i = 0; i <= n; i++) {
            console.log(arr[i]);
        }
    }
}
retriveArray([1, 2, 3, 4, 5, 6], 6)
console.log("<---------- Next Question ---------->");

// Q15: retrive array of last n number of an array 
function retriveArrayofLastNnumber(arr, n = 0) {
    arr.reverse();
    for (let i = 0; i <= n; i++) {
        console.log(arr[i]);
    }

}
retriveArrayofLastNnumber([1, 2, 3, 4, 5, 6], 2);
console.log("<---------- Next Question ---------->");

// Q16 : frequent element of an array 
var frequents = function frequentElem(arr) {

    var occurences = {};
    arr.forEach(element => {
        if (occurences.hasOwnProperty(element) === false) {
            occurences[element] = 1;
        } else {
            occurences[element]++;
        }
    });
    var valuesofObj = Object.keys(occurences).reduce((first, second) => {
        return occurences[first] > occurences[second] ? first : second
    });
    console.log(valuesofObj);

    return occurences;
}

console.log(frequents(["q", "b", "c", "c"]));
console.log("<---------- Next Question ---------->");


// Q17 : frequent element of an array 
let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61116340b4b54c769d6d62c1c3f928ee';

async function fetchData() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

}
fetchData();

// api for car data
const url2 = 'https://car-data.p.rapidapi.com/cars?limit=10&page=0';
const options2 = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'e056c081bemsh9611d6ee775aff1p1219a7jsn6d588025a271',
        'x-rapidapi-host': 'car-data.p.rapidapi.com'
    }
};
const carData = async () => {
    try {
        const response = await fetch(url2, options2);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
carData();


var dataTypee = function typeTeller(args) {
    return typeof args;
};
console.log(dataType(2));
console.log(dataType("salman"));
console.log(dataType([1]));
console.log(dataType({}));
console.log(dataType(true));
console.log(dataType(NaN));
console.log(dataType(undefined));
console.log(dataType(dataType));
console.log("<---------- Next Question ---------->");
