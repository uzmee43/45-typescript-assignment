
let make_great:string[] = ["ali","huzaifa","khanu"];
function show_magicians(magicians:string[]) {
    console.log(magicians);
   return magicians
}
show_magicians(make_great);

function make_great1(magicians:string[]) {
    for(let i =0; i < magicians.length ;i++){
        magicians[i] =" The Great " + magicians[i];
}
}

const magicians:string[] = ["Ali ","Huzaifa ","Khanu "]
make_great1(magicians);
show_magicians(magicians);