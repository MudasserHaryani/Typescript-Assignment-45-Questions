//Exercise #3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Mudasser haryani";
let lowercaseName: string = personName.toLowerCase();
let upperCaseName: string = personName.toUpperCase();
let titlecaseName: string = personName.split(` `).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(` `);



console.log(personName);
console.log(lowercaseName);
console.log(upperCaseName);
console.log(titlecaseName);



