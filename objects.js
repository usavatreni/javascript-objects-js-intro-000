var playlist = {
 Tupac: "All Eyez On Me"
};

function updatePlaylist(playlist, artistName, songTitle ) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
