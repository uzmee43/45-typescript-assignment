let studentsName:string[] = ["Dani","chandi","bano","Ali"];
//  studentsName.sort; // This will give error because sort is a method not property
studentsName.sort(function (a, b) { return a.localeCompare(b); });
console.log("Sorted names are : ",studentsName);
  