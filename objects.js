
var playlist = new Object ({
  bayside: "duality"  });

function updatePlaylist (playlist,newBand, song){
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
delete playlist.artistName
return playlist
}
