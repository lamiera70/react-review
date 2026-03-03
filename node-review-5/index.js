const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

app.use(express.json()); // ✅ fondamentale per leggere JSON nel body

let songs = [
  { id: crypto.randomUUID(), title: "Shape of You", artist: "Ed Sheeran" },
  { id: crypto.randomUUID(), title: "Blinding Lights", artist: "The Weeknd" },
  { id: crypto.randomUUID(), title: "Lose Yourself", artist: "Eminem" }
];


app.get('/songs', (req, res) => {
  res.status(200).json(songs);
});


app.delete("/songs/:id", (req, res) => {
    const { id } = req.params;
    const song = songs.find((s) => s.id === id); // canzone da cancellare

    if(!song) {

      res.status(404).json({message: 'canzone non trovata'});  

    } else {

      // ✅ serve per ricalcolare array originale eliminando la canzone selezionata
      songs = songs.filter((s) => s.id !== id);
          
      res.status(200).json(songs);

    };
    
});


app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});


