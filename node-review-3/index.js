const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

app.use(express.json()); // ✅ fondamentale per leggere JSON nel body

let songs = [
  {id: crypto.randomUUID(), title: "Shape of You", artist: "Ed Sheeran"},
  {id: crypto.randomUUID(), title: "Blinding Lights", artist: "The Weeknd"}
];


app.post('/songs', (req, res) => {

  // ✅ escludo id dal body (protezione)
  const { id, ...safeBody } = req.body;

  // ✅ id creato SOLO dal server
  const newSong = {id: crypto.randomUUID(), ...safeBody};

  songs.push(newSong);

  res.status(201).json(newSong);
});


app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});


