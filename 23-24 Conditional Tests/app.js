"use strict";
// let car: string = 'subaru';
// // Test 1
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // True
// // Test 2
// console.log("Is car == 'honda'? I predict False.");
// console.log(car == 'honda'); // False
// // Test 3
// console.log("Is car === 'bus'? I predict False.");
// console.log(car === 'bus'); // False
// // Test 4
// console.log("Is car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru'); // False
// // Test 5
// console.log("Is car !== 'honda'? I predict True.");
// console.log(car !== 'honda'); // True
// // Test 6
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru'); // False
// // Test 7
// console.log("Is car !== mehran? I predict True.");
// console.log(car !== "mehran"); // True
// // Test 8
// console.log("Is car < 'volvo'? I predict True.");
// console.log(car < 'volvo'); // True
// // Test 9
// console.log("Is car > 'vego'? I predict True.");
// console.log(car > 'vego'); // True
// // Test 10
// console.log("Is car.length == 6? I predict True.");
// console.log(car.length == 6); // True
// 24.More Conditional Tests: 
// Tests for equality and inequality with strings
let str1 = 'hello';
let str2 = 'world';
console.log("Test for equality with strings: Is 'hello' == 'hello'? I predict True.");
console.log(str1 == 'hello'); // True
console.log("Test for inequality with strings: Is 'hello' != 'world'? I predict True.");
console.log(str1 != str2); // True
// Tests using the lower case function
let name1 = 'KHAN';
console.log("Test using lowercase function: Is 'KHAN' in lowercase equal to 'uzma'? I predict False.");
console.log(name1.toLowerCase() == 'KHAN'); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log("Numerical equality test: Is 5 == 5? I predict True.");
console.log(num1 == 5); // True
console.log("Numerical inequality test: Is 5 != 10? I predict True.");
console.log(num1 != num2); // True
console.log("Greater than test: Is 10 > 5? I predict True.");
console.log(num2 > num1); // True
console.log("Less than test: Is 5 < 10? I predict True.");
console.log(num1 < num2); // True
console.log("Greater than or equal to test: Is 10 >= 10? I predict True.");
console.log(num2 >= num2); // True
console.log("Less than or equal to test: Is 5 <= 10? I predict True.");
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log("AND operator test: Is (x == 5) && (y == 10)? I predict True.");
console.log((x == 5) && (y == 10)); // True
console.log("OR operator test: Is (x == 5) || (y == 5)? I predict True.");
console.log((x == 5) || (y == 5)); // True
// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
console.log("Test for item in array: Is 3 in the array? I predict True.");
console.log(numbers.includes(3)); // True
// Test whether an item is not in an array
console.log("Test for item not in array: Is 6 not in the array? I predict True.");
console.log(!numbers.includes(6)); // True
