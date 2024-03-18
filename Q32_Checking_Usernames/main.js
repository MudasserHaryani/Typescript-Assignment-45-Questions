"use strict";
// Make a list of current users
let current_users = ["john", "jane", "eric", "emma", "admin"];
// Make a list of new users
let new_users = ["Eric", "Sarah", "Jane", "mike", "alex"];
// Convert current_users array to lowercase
let current_users_lower = current_users.map(user => user.toLowerCase());
// Loop through the new_users list
for (let user of new_users) {
    // Convert the user to lowercase for case-insensitive comparison
    let user_lower = user.toLowerCase();
    // Check if the username has already been used
    if (current_users_lower.includes(user_lower)) {
        console.log(`Sorry, the username '${user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations, the username '${user}' is available.`);
    }
}
