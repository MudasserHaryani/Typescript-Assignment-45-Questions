/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

// Tests for equality and inequality with strings
let str1: string = 'apple';
let str2: string = 'banana';

console.log("Equality test with strings: I predict False.");
console.log(str1 == str2);

console.log("Inequality test with strings: I predict True.");
console.log(str1 != str2);

// Tests using the lower case function
let str3: string = 'HELLO';
let str4: string = 'hello';

console.log("Lower case test: I predict True.");
console.log(str3.toLowerCase() == str4);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log("Equality test with numbers: I predict False.");
console.log(num1 == num2);

console.log("Inequality test with numbers: I predict True.");
console.log(num1 != num2);

console.log("Greater than test: I predict True.");
console.log(num1 > num2);

console.log("Less than test: I predict False.");
console.log(num1 < num2);

console.log("Greater than or equal to test: I predict True.");
console.log(num1 >= num2);

console.log("Less than or equal to test: I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;
let z: number = 15;

console.log("And operator test: I predict True.");
console.log(x < y && y < z);

console.log("Or operator test: I predict True.");
console.log(x < y || x > z);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Item in array test: I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Item not in array test: I predict False.");
console.log(!fruits.includes('grape'));
