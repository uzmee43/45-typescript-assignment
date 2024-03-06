"use strict";
// Define the make_shirt function
// function make_shirt(size:string,message:string){
//     let result = `The shirt size is ${size.toUpperCase()} and the message on it is: "${message}"`;
// }
// // Call the make_shirt function with an example
// let myShirt=make_shirt("medium","Learn TypeScript");
// console.log(myShirt);
// 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function largeShirts(size, message) {
    return `${size ? (`Size: ${size.toUpperCase()}`) : ""} ${message ? (`Message: "${message}"`) : ""}`;
}
let myLargeShirt = largeShirts("larges", "I love TypeScript");
console.log(myLargeShirt);
let mediumShirt = largeShirts("medium", "Wellcome to learn typepscript");
console.log(mediumShirt);
