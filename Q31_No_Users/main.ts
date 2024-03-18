let age: number = 30; // Change the age value to test different scenarios
let userAge: number[] = []; // List of user ages

// Check if the list of user ages is not empty
if (userAge.length === 0) {
    console.log("We need to find some users!");
} else {
    if (age < 2) {
        console.log("The person is a baby.");
    } else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    } else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    } else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    } else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    } else {
        console.log("The person is an elder.");
    }
}
