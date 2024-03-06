"use strict";
let pizzas = ["Pepperoni", "Veggie", "Margherita"];
for (let i = 0; i < pizzas.length; i++)
    if (pizzas[i] === "Veggie") {
        console.log(`I love ${pizzas[i]} pizza`);
    }
    else if (pizzas[i] === "Pepperoni") {
        console.log(`I like ${pizzas[i]} pizza`);
    }
    else if (pizzas[i] === "Margherita") {
        console.log(`My favorite is ${pizzas[i]}`);
        break;
    }
console.log(" I like very much all kind of pizzas");
