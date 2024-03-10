let guestArr: string[] = ["Imran Khan", "Asif Ali Zardari", "Nawaz Shareef", "Maulana Tariq Jameel", "Bilawal Bhutto", "Sheikh Rasheed", "Shah Mehmood Qureshi", "Kamran Tessori"];

// Print a message saying that you can invite only two people for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (guestArr.length > 2) {
    let removedGuest: string = guestArr.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list, letting them know they're still invited
guestArr.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Remove the last two names from your list to make it empty
guestArr.splice(0, guestArr.length);

// Print your list to make sure you actually have an empty list at the end of your program
console.log("After removing all guests, the guest list is now:", guestArr);
