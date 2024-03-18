// Define a function called show_magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Define a function called make_great to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Create an array of magician's names
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

// Make a copy of the array of magician's names
let modified_magicians: string[] = make_great([...magicians]);

// Call the function to show the original list of magicians
console.log("Original list of magicians:");
show_magicians(magicians);

// Call the function to show the modified list of magicians
console.log("\nModified list of magicians:");
show_magicians(modified_magicians);
