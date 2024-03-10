//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let GuestArr: string[] = ["Imran Khan", "Asif Ali Zardari", "Nawaz Shareef", "Maulana Tariq Jameel"];
let CannotAttend: string = "Imran Khan";

console.log(CannotAttend + " cannot attend the dinner.");

let newGuest: string = "Kamran Tessori";
GuestArr [GuestArr.indexOf(CannotAttend)] = newGuest;

// console.log(GuestArr);

GuestArr.map((items) =>
console.log(`Honourable ${items}, you are invited to the dinner.`)
);

