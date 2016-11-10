console.log("firstline in js");
console.log(Date.now());

function executeThisIfXHRfails(xhrEvent) {
	console.log("An error occured while transferring the data");

}

function executeThisCodeAfterFileIsLoaded () {
	console.log("this", this);
	console.log("executeThisCodeAfterFileIsLoaded");
	console.log( Date.now());


// parse the response text as JSON. Turns string of characters into a JS object
  // (observe that JSON keys are strings, which is not how a JS object is formatted)

var data = JSON.parse(event.target.responseText); //'this' is the XMLHttpRequest

console.log("data", data);

var songList = document.getElementById("song-list");

for (var currentSong in data.songs) {
	var songData = '';
	var song = data.songs[currentSong];
	songData += "<ul class="song-content">li> <a href="#" ><p class="songN">"; //<div class ='song-block'>";
	songData =+"</p></a></li>${song.title}</p></a></li>";
    songData += "<li class="content-order"><p class="ArtistN">"song.artist;
    songData += "|</p>";
    songData += "<p class="AlbumN">"//"<div class='album'>On the album ";
    songData += song.album;
    songData += "|</p>"//"</div>";
    songData += "</p></li></ul>"//"</div>";

    songList.innerHTML += songData;
  }
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisIfXHRfails);

myRequest.open("GET", "song.json");
myRequest.send();

console.log("Last line in js fiel");
console.log(Date.now());