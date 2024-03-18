// Define a function called makeSandwich that accepts a variable number of sandwich items
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with the following items:");
    items.forEach(function (item) { return console.log("- ".concat(item)); });
    console.log("Sandwich is ready!\n");
}
// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
