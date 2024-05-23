// **Q37** - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
  if (size === void 0) {
    size = "large";
  }
  if (message === void 0) {
    message = "I love JavaScript";
  }
  console.log(`size is ${size} and ${message} `);
}
make_shirt();
make_shirt("medium", "i love this one as well");
make_shirt("small");
console.log(`---------------------`);

// **Q38** - Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
  if (country === void 0) {
    country = "Pakistan";
  }
  console.log(`${city} is in the ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Toronto", "Canada");

console.log(`---------------------`);

// **Q39** - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
  return "".concat(`"${city}, ${country}"`);
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Toronto", "Canada"));
console.log(city_country("Kabul", "Afghanistan"));
