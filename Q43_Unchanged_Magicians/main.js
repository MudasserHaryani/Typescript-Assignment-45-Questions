var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define a function called show_magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Define a function called make_great to modify a copy of the array of magicians
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Create an array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// Make a copy of the array of magician's names
var modified_magicians = make_great(__spreadArray([], magicians, true));
// Call the function to show the original list of magicians
console.log("Original list of magicians:");
show_magicians(magicians);
// Call the function to show the modified list of magicians
console.log("\nModified list of magicians:");
show_magicians(modified_magicians);
