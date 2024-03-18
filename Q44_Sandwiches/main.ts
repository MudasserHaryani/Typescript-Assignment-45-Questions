// Define a function called makeSandwich that accepts a variable number of sandwich items
function makeSandwich(...items: string[]): void {
    console.log("Making sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("Sandwich is ready!\n");
}

// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
