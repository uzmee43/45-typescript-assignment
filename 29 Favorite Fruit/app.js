"use strict";
let FavoriteFruit = ["mango", "banana", "grape"];
if (FavoriteFruit.includes("banana")) {
    console.log(` I really like banana!`);
}
if (FavoriteFruit.includes("grape")) {
    console.log(`I also like grape!`);
}
if (FavoriteFruit.includes("mango")) {
    console.log("mango is my farvorite  fruit!");
}
if (!FavoriteFruit.includes("apple")) {
    console.log("apple is not my favorite fruits.");
}
else {
    console.log("I don't like apple.");
}
if (FavoriteFruit.includes("orange") || FavoriteFruit.includes("kiwi")) {
    console.log("I like citrus fruits");
}
else {
    console.log("I don't like citrus fruits.");
}
