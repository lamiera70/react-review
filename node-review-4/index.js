const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

app.use(express.json()); // ✅ fondamentale per leggere JSON nel body

let songs = [
  {id: crypto.randomUUID(), title: "Shape of You", artist: "Ed Sheeran"},
  {id: crypto.randomUUID(), title: "Blinding Lights", artist: "The Weeknd"}
];


app.put('/songs/:id', (req, res) => {

  const { id } = req.params;
  const song = songs.find(s => s.id === id); // song non aggiornato

  if(!song) {

    res.status(404).json({message: 'canzone non trovata'});  

  } else {

    // ✅ canzone aggiornata
    const editSong = { ...song, ...req.body };
        
    // ✅ serve per ricalcolare array originale inserendo la canzone aggiornata
    songs = songs.map(s => s.id === id ? editSong : s);

    res.status(200).json(editSong);

  };
});


app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});


