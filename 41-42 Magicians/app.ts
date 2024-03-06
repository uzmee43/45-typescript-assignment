let Magicians:string[] = ["ali","huzaifa","khanu"];
function show_magicians(magicians:string[]):void {
    console.log(magicians);
   
}
show_magicians(Magicians);


// 42:modifies the array of magicians


function make_great(magicians:string[]):void {
    for(let i =0; i < magicians.length ;i++){
        magicians[i] =" The Great " + magicians[i];
}
}

const magicians:string[] = ["Ali ","Huzaifa ","Khanu "]
make_great(magicians);
show_magicians(magicians);