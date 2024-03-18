//Exercise No.37: Large Shirts
// Define a function called make_shirt with default parameters
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}

// Call the function to create shirts with default and custom values
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
make_shirt("Small", "JavaScript is awesome!"); // Custom shirt with custom message
