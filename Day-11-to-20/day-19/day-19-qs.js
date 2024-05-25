// **Q55** - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var list = [1, 2, 3, 4, 5, 6];
var newlist = list.map((new_list) => {
  return new_list * 2;
});
console.log(newlist);
// **Q56** - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var differentTypes = ["salman", 5748, 656, "ali", true];
var onlyStrings = differentTypes.filter((onlyStr) => {
  return typeof onlyStr === "string";
});
console.log(onlyStrings);

// **Q57** - Find the Average Grade: Given a list of grades, calculate the average grade.
