"use strict";
let animals = ["cat", "dog", "cow"];
// Print the name of each animal
console.log("Names of animals:");
for (let animal of animals) {
    console.log(animal);
}
for (let i = 0; i < animals.length; i++)
    if (animals[i] === "cat") {
        console.log(`cat is so  cute!`);
    }
    else if (animals[i] == "dog") {
        console.log(`A dog would make a great pet for me`);
    }
    else if (animals[i] == "cow") {
        console.log("cows are providing dairy products like milk, cheese,\n and butter. Cows are also raised to produce meat.");
    }
// Print what these as nimals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
