
function Sandwiches(...items:string[]) : void{
    console.log(" your Sandwiches oder is:");
    for(let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
}

}

Sandwiches("Cheese", "olive", "capsicum");
Sandwiches("Cheese", "chicken", "tomato");
Sandwiches("Cheese", "beef", "olive");