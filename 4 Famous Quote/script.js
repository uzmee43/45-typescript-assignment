"use strict";
// / Get the elements from the DOM
const authorElement = document.getElementById('author');
const quoteElement = document.getElementById('quote');
if (authorElement && quoteElement) {
    // Define the quote and author
    const author = "  Quaid e Azam ";
    const quote = "Before you make a decision… “Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man";
    // Update the innerHTML of the elements
    authorElement.innerHTML = ` ${author} once said! `;
    quoteElement.innerHTML = `"${quote}"`;
}
else {
    console.error("Could not find elements with provided IDs.");
}
