// Define an array of places to visit
let Visitplaces: string[] = ["Saudi Arabia", "Malaysia", "Maldives", "Dubai", "Australia"];

// Print the array in its original order
console.log("Original order:");
console.log(Visitplaces);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order (without modifying original list):");
console.log([...Visitplaces].sort());

// Show that the original array is still in its original order
console.log("\nOriginal array is still in its original order:");
console.log(Visitplaces);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order (without modifying original list):");
console.log([...Visitplaces].sort().reverse());

// Show that the original array is still in its original order
console.log("\nOriginal array is still in its original order:");
console.log(Visitplaces);

// Reverse the order of the list
Visitplaces.reverse();
console.log("\nReversed order:");
console.log(Visitplaces);

// Reverse the order of the list again to bring it back to its original order
Visitplaces.reverse();
console.log("\nBack to original order:");
console.log(Visitplaces);

// Sort the array so it's stored in alphabetical order
Visitplaces.sort();
console.log("\nSorted in alphabetical order:");
console.log(Visitplaces);

// Sort the array in reverse alphabetical order
Visitplaces.sort((a, b) => b.localeCompare(a));
// Visitplaces.reverse();

// Print the list to show that its order has changed
console.log("\nSorted in reverse alphabetical order:");
console.log(Visitplaces);