"use strict";
let guestArr = ["Imran Khan", "Asif Ali Zardari", "Nawaz Shareef", "Maulana Tariq Jameel", "Bilawal Bhutto", "Sheikh Rasheed", "Maryam Nawaz", "Pervez Musharraf"];
// Print a message indicating that you can invite only two people for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guestArr.length > 2) {
    let removedGuest = guestArr.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print a message to each of the two people still on your list, letting them know they're still invited
guestArr.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
// Print the number of people you are inviting to dinner
console.log(`Number of people invited to dinner: ${guestArr.length}`);
