"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Define objects containing information about different countries
let countries = {
    "USA": { capital: "Washington, D.C.", population: 331002651, language: "English" },
    "India": { capital: "New Delhi", population: 1380004385, language: "Hindi, English" },
    "China": { capital: "Beijing", population: 1444216107, language: "Mandarin" },
    "Pakistan": { capital: "Islamabad", population: 240000000, language: "Urdu" },
    "Russia": { capital: "Moscow", population: 145934462, language: "Russian" }
};
// Print information about each country
console.log("Information about different countries:");
for (let country in countries) {
    console.log(`Country: ${country}`);
    console.log(`Capital: ${countries[country].capital}`);
    console.log(`Population: ${countries[country].population}`);
    console.log(`Language: ${countries[country].language}`);
    console.log("------------------------------------------");
}
