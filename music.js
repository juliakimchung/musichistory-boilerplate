
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

	// songList.classList.add("hidden");
	// sideBar.classList.add("hidden");

})

// body.addEventListener("click", function() {
// 	addInputBar.classList.add("hidden");
// 	addInputBar.classList.remove("visible");

// 	songList.classList.toggle("visible");
// 	sidebar.classList.toggle("visible");
// 	songList.classList.remove("hidden");
//     sidebar.classList.remove("hidden");
// })


// if ("keypress" === 13) {
// 	addInputBar.classList.add("hidden");
// 	addInputBar.classList.remove("visible");
// }

