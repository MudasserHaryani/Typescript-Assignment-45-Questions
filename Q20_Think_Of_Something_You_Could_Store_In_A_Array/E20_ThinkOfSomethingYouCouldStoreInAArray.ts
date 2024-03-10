// Create an array containing a list of mountains
let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// Print the list of mountains
console.log("List of mountains:");
mountains.forEach((mountain, index) => {
    console.log(`${index + 1}. ${mountain}`);
});
