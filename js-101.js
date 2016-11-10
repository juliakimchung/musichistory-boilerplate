
var songArray = [
	{
	  SongName: 'Thriller',
	  Artist: 'Michael Jackson',
	  Album: 'Thriller'
	 },

	{
	 SongName: 'Legs',
	 Artist: 'ZZ Top',
	 Album: 'Eliminator'
	},

	{
	 SongName: 'Another Brick in the Wall',
	 Artist: 'Pink Floyd',
	 Album: 'The Wall'
	},

	{
	 SongName: 'Welcome to the Jungle',
	 Artist: 'Guns & Roses' ,
	 Album: 'Appetite for Destruction'
	},

	{
	 SongName: 'Ironic',
	 Artist: 'Alanis Morisette',
	 Album: 'Jagged Little Pill'
	},

	{
	 SongName: 'The Logical Song' ,
	 Artist: 'Supertramp',
	 Album: 'Breakfast in America'
	},

	{
	 SongName: 'With Or Without You',
	 Artist: 'U2',
	 Album: 'The Joshua Tree'
	}
	
];

var injectDOM = '';
var injectPoint =document.getElementById('song-list');


for (var i = 0; i < songArray.length; i++) {

 			/*listOfSongs.push(songArray[i].SongName);
 		    listOfArtist.push(songArray[i].Artist);
 			listOfAlbum.push(songArray[i].Album);


/*var songList = document.getElementByClassName("song-name").innerHTML;
songList = listOfSongs;*/

/*console.log(listOfSongs);*/


var injectTitle = '<ul class="song-content"><li><a href="#"><p class="songN"> ' + songArray[i].SongName + '</p></a></li>';
var injectArtist = '<li class="content-order"><p class="ArtistN">' + songArray[i].Artist + ' |</p>';
var injectAlbum = '<p class="AlbumN">' + songArray[i].Album +' |</p>';
var injectEnd = '<p class="Genre">Pop </p></li>';

injectDOM += injectTitle + injectArtist + injectAlbum + injectEnd;
};

injectPoint.innerHTML = injectDOM;










