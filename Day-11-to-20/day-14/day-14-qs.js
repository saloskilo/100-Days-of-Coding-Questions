// **Q40** - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, track) {
  var album = { name: artist_name, title: album_title };
  if (track) {
    album["track"] = track;
  }
  return album;
}

console.log(make_album("salman", "album1"));
console.log(make_album("afridi", "album2"));
console.log(make_album("ali", "album3", 45));
console.log("--------------------------");

// **Q41** - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["magician1", "magician2", "magician3"];
function show_magicians(params) {
  params.forEach((elements) => {
    console.log(elements);
  });
}
show_magicians(magicians);

// another way
function show_magicians2(params) {
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    console.log(element);
  }
}
show_magicians2(magicians);
console.log("--------------------------");

// **Q42** - Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(params){
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        console.log(`${element} Great`)
    }
};
make_great(magicians);
show_magicians(magicians)