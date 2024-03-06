var make_great = ["ali", "huzaifa", "khanu"];
function show_magicians(magicians) {
    console.log(magicians);
    return magicians;
}
show_magicians(make_great);
function make_great1(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = " The Great " + magicians[i];
    }
}
var magicians = ["Ali ", "Huzaifa ", "Khanu "];
make_great1(magicians);
show_magicians(magicians);
