var GuestList = ["Shamu", "sara khan", "Sadif"];
// for(let i=0;i<GuestList.length;i++){
//     console.log(`Dear ` + GuestList[i] +`, \n\n you are cordially invited to dinner at my place.\n\nIt would be an honor to have you join us. thank you\n`);
// }
//15: Changing Guest List:
var MissingGuest = "Sadif"; //The guest is not there
var newguest = "Dr.saima"; //new guest to add to the list
GuestList.pop();
GuestList.push('Dr.saima'); //add a new guest to the list}`)}
// for(let i=0;i<GuestList.length;i++){
//     console.log(`Dear ` + GuestList[i] +`, \n\n you are invited to dinner at my place.\n\nI will be happy if you come thank you\n`);
// }
console.log("".concat(MissingGuest, " is not in the party."));
// 16: More Guests
console.log("The good news is that the dining table has become bigger so invites the 3 more guests");
GuestList.unshift("Nazia"); //add a guest at the beginning of the list
GuestList.splice(2, 0, "Ali"); //Add Ali the middle of array
GuestList.push("Zainab"); // Add Zainab to end of array
for (var i = 0; i < GuestList.length; i++) {
    console.log("Dear " + GuestList[i] + ", \n\n you are invited to dinner at my place.\n\nI will be happy if you come thank you\n");
}
// 17: Shrinking Guest List:
console.log("\n Sorry, there is not a big table, so only two people have been invited.");
while (GuestList.length > 2) {
    var removeList = GuestList.pop();
    console.log(" ".concat(removeList, ",sorry you can't come to the dinner party\n"));
}
for (var i = 0; i < GuestList.length; i++) {
    console.log("Dear " + GuestList[i] + ", \n\n you are still invited thank you\n");
}
GuestList.splice(0, 2); //removing the list
console.log(GuestList);
