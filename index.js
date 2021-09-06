const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(song) {
    console.log(
      'Playing ' +
        song[title] +
        'from ' +
        song[album] +
        'by ' +
        song[artist] +
        '|' +
        song[duration] +
        '.'
    )
  },
}
//function to check if id is exist in song
function isIdExist(playerSong, id) {
  for (let i = 0; i < playerSong; i++) {
    if (songs[i].id === id) {
      return true
    }
  }
  return false
}

function playSong(id) {}

function removeSong(id) {
  if (!isIdExist(player.songs, id)) {
    throw new error('ID is not exist')
  }

  for (let i = 0; i < player.songs.length; i++) {
    //remove id from songs
    if (player.songs[i].id === id) {
      player.songs.splice(i, 1)
    }
  }
  for (let j = 0; j < player.playlists.length; j++) {
    //remove id from playlist
    for (let k = 0; k < player.playlists.songs.length; k++) {
      if (player.playlists[j].songs[k] === id) {
        player.playlists[j].songs.splice(k, 1)
      }
    }
  }
}

function addSong(title, album, artist, duration, id) {
  // your code here
}

function removePlaylist(id) {
  // your code here
}

function createPlaylist(name, id) {
  // your code here
}

function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}