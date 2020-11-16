var playlist = {
 Tupac: "All Eyez On Me"
};

function updatePlaylist(obj, key, value ) {
  return Object.assign({}, obj, { [key]: value })
}
