"use strict";
let personNameWithWhitespace = ("\\t      Mudasser Haryani       \\n");
// Print the name with whitespace
console.log(personNameWithWhitespace);
let strippedName = personNameWithWhitespace.replace(/\\n|\\t/g, '');
let trimmedName = strippedName.trim();
console.log("Stripped name & Trimmed name:", trimmedName);
