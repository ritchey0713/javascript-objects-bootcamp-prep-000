
var playlist = new Object ({
  bayside: "duality"  });

function updatePlaylist (playlist,band, song){
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist;
}

function removeFromPlaylist(playlist, journey){
  delete playlist.journey;
  return playlist;
}
