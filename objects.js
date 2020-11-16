var playlist = {
  artist: "song1",
  artist2: "song2",
  artist3 : "song3"
};

function updatePlaylist(obj, key, value ) {
  return Object.assign({}, obj, { [key]: value })
}
