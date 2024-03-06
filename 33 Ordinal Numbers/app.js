"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= numbers.length; i++) {
    let ordinal = "string";
    if (numbers[i] === 1) {
        ordinal = "st";
    }
    else if (numbers[i] === 2) {
        ordinal = "nd";
    }
    else if (numbers[i] === 3) {
        ordinal = "rd";
    }
    else if (numbers[i] === 4) {
        ordinal = "th";
    }
    else if (numbers[i] === 5) {
        ordinal = "th";
    }
    else if (numbers[i] === 6) {
        ordinal = "th";
    }
    else if (numbers[i] === 7) {
        ordinal = "th";
    }
    else if (numbers[i] === 8) {
        ordinal = "th";
    }
    else if (numbers[i] === 9) {
        ordinal = "th";
    }
    {
        // Print the number with its ordinal ending
        console.log(`${numbers[i]}${ordinal}`);
    }
}
