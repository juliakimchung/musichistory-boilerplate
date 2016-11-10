
let addMusic = document.getElementById("Add-music");
let songList = document.getElementById("song-list");
let sideBar = document.getElementById("sidebar");
let listMusic = document.getElementById("listMusic");
let addInputBar = document.getElementById("addMusic");
let body = document.getElementById("body");


addMusic.addEventListener("click", function (){

  songList.classList.add("hidden");
  sideBar.classList.add("hidden");
  addMusic.classList.add("hidden");

  	addInputBar.classList.add("visible");
  	addInputBar.classList.remove("hidden");

  
});

listMusic.addEventListener("click", function() {

	addInputBar.classList.add("hidden");
	addInputBar.classList.remove("visible");

	songList.classList.add("visible");
	sidebar.classList.add("visible");
	songList.classList.remove("hidden");
    sidebar.classList.remove("hidden");

	
})
var listOfSongs = document.getElementById("song-list");
var inputBtn = document.getElementById("inputButton");
var deleteBtn = document.getElementsByClassName("deleteBtn");
	inputBtn.addEventListener("click", addNewArtist);
	
var songData = {};


function addNewArtist() {
	var artist = document.getElementById("addArtist");
	var song = document.getElementById("addSong");
	var album = document.getElementById("addAlbum")

	var newData = {Song : song.vlaue, Artist: artist.value, Album: album.value};

	//songData = songData.unshift(newData);

	//songDom();

};
	console.log("songData", songData );



function songDom() {
	var newHTML = " ";
	for (var item in songData) {
		newHTML += `<div id=song--${item}><p class="songN">${songData[item].Song}</p><p class = "ArtistN">${songData[item].Artist}</p><p class = "AlbumN">${songData[item].Album}</p><input type ="button" class="deleteBtn"></div>`
	}
	listOfSongs.innerHTML = newHTML;

	deleteBtnEvent();
	
}

function deleteBtnEvent() {

	for (var i = 0; i < deleteBtn.length; i ++) {
		deleteBtn[i].addEventListener("click", deleteItem);
	}
}

// function deleteItem () {
// 	var 
// }

function addJsonSongs() {
	var myRequest = new XMLHttpRequest();
	myRequest.open("GET", "songs.json");
	myRequest.send();
	myRequest.addEventListener("load", addNewSongs );


}

function addNewSongs () {

     var newSongData = JSON.parse(this.responseText);
         newSongData.forEach(function (object){
         songData.unshift(object);
         songDom();

});

}




