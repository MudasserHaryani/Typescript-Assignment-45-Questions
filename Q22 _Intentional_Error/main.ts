//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let myArray: number[] = [1, 2, 3, 4, 5];

// Trying to access an index that is out of bounds
let indexError = myArray[10]; // This will produce an array index error

// Correcting the error
console.log(indexError); // This line will not be executed because the error will stop the execution flow
