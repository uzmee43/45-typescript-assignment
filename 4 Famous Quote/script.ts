
// / Get the elements from the DOM
const authorElement: HTMLElement | null = document.getElementById('author');


const quoteElement: HTMLElement | null = document.getElementById('quote');


if (  authorElement && quoteElement) {
    // Define the quote and author
    const author: string = "  Quaid e Azam ";

    const quote: string = "Before you make a decision… “Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man";

    

    // Update the innerHTML of the elements
    authorElement.innerHTML = ` ${author} once said! `;

    quoteElement.innerHTML = `"${quote}"`;
    
} else {
    console.error("Could not find elements with provided IDs.");
}
