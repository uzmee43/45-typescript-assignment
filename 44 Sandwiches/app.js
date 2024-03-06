function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(" your Sandwiches oder is:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
Sandwiches("Cheese", "olive", "capsicum");
Sandwiches("Cheese", "chicken", "tomato");
Sandwiches("Cheese", "beef", "olive");
