// Define a function called make_shirt with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: ").concat(message));
}
// Call the function to create shirts with default and custom values
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
make_shirt("Small", "JavaScript is awesome!"); // Custom shirt with custom message
