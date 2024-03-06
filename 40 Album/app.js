function make_album(artist, title, number_of_tracks) {
    if (number_of_tracks === void 0) { number_of_tracks = 20; }
    var musicAlbum = {
        artist: artist,
        title: title,
        number_of_tracks: number_of_tracks,
    };
    console.log(musicAlbum);
}
make_album("Atif aslam", "tari yaad", 20);
make_album("Nusrat fateh ali", "dil E umeed", 21);
make_album("Zeeshan khan", "judai", 22);
