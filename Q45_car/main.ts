// Define a function called carInfo that stores information about a car in an object
function carInfo(
  manufacturer: string,
  modelName: string,
  ...options: [string, any][]
): { manufacturer: string; modelName: string; [key: string]: any } {
  let car: { manufacturer: string; modelName: string; [key: string]: any } = {
    manufacturer: manufacturer,
    modelName: modelName,
  };

  // Store additional options as key-value pairs in the car object
  options.forEach((option) => (car[option[0]] = option[1]));

  return car;
}

// Call the function with required information and two other name-value pairs
let myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the object to ensure all the information was stored correctly
console.log(myCar);
