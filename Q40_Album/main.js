// Define a function called make_album with an optional parameter for the number of tracks
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create dictionaries representing different albums
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12); // This album has 12 tracks
var album3 = make_album("Artist3", "Album3", 8); // This album has 8 tracks
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
