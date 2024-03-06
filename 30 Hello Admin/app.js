"use strict";
let userNames = ["Admin", "Ayisha", "Samia", "Iqra"];
for (let userName of userNames)
    if (userName == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (userName == "Ayisha" || userName == "Samia" || userName == "Iqra") {
        console.log(`${userName}, Wellcome to logging again`);
    }
    else {
        console.log("Hello Eric, thank you for logging in again.");
    }
