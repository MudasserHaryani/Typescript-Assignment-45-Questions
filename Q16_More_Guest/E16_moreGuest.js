"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let guestArr = ["Imran Khan", "Asif Ali Zardari", "Nawaz Shareef", "Maulana Tariq Jameel"];
let canNotAttend = "Imran Khan";
let newGuest = "Bilawal Bhutto";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`Honorable ${items}, I found a bigger dinner table so I am inviting more people.`));
// Add one new guest to the beginning of the array
let guestBeg = "Sheikh Rasheed";
guestArr.unshift(guestBeg);
// Add one new guest to the middle of the array
let guestMiddle = "Shah Mehmood Qureshi";
let middleIndex = Math.floor(guestArr.length / 2);
guestArr.splice(middleIndex, 0, guestMiddle);
// Use push() to add one new guest to the end of the array
let guestEnd = "Kamran Tessori";
guestArr.push(guestEnd);
// Print a new set of invitation messages
guestArr.map((items) => console.log(`Honorable ${items}, I found a bigger dinner table so I am inviting more people.`));
