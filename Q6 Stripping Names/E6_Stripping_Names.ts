//Exercise#6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let personNameWithWhitespace: string = ("\\t      Mudasser Haryani       \\n");

// Print the name with whitespace
console.log(personNameWithWhitespace);

let strippedName: string = personNameWithWhitespace.replace(/\\n|\\t/g, '');

let trimmedName: string = strippedName.trim();

console.log("Stripped name & Trimmed name:", trimmedName);

