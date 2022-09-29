// function printName(person: {
//         first:string; 
//         last:string;}
//     ){
//     console.log(`${person.first} ${person.last}`);
// }
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, "-").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 128231232,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earings = calculatePayout(mySong);
console.log(earings);
printSong(mySong);
