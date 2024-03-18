// Define a function called show_magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Define a function called make_great to modify the array of magicians
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Create an array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Modify the array of magicians by adding "the Great" to each name
magicians = make_great(magicians);
// Call the function to show that the list has been modified
show_magicians(magicians);
