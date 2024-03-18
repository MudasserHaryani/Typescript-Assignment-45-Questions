//Define an array of animals 
var animals = ["Dog", "Cat", "Rabbit"];
//Use a for loop to print the name of each animal and statement about it 
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
//Add a line stating what these animal have in common
console.log("Any of these animals would make a great pet!");
