"use strict";
// Define a function called carInfo that stores information about a car in an object
function carInfo(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Store additional options as key-value pairs in the car object
    options.forEach(option => car[option[0]] = option[1]);
    return car;
}
// Call the function with required information and two other name-value pairs
let myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the object to ensure all the information was stored correctly
console.log(myCar);
