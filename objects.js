var playlist = new Object ({
  bayside: "duality"  });

function updatePlaylist (playlist,journey, faithfully){
  playlist["journey"] = "faithfully"
  return playlist;
}

function removeFromPlaylist(playlist, journey){
  delete playlist.journey;
  return playlist;
}
