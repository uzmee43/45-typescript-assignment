"use strict";
// List of current usernames
const current_users = ['Ayisha', 'soniya', 'Hahi', 'iqra', 'rabia'];
// List of new usernames
const new_users = ['Ayisha', 'iqra', 'fatima', 'shamu', 'uzma'];
// Function to check if a username already exists
function isUsernameAvailable(username) {
    return !current_users.some((user) => user.toLowerCase() === username.toLowerCase());
}
// Loop through new_users to check availability
new_users.forEach((user) => {
    if (isUsernameAvailable(user)) {
        console.log(`The username '${user}' is available.`);
    }
    else {
        console.log(`The username '${user}' is already taken. Please enter a new username.`);
    }
});
