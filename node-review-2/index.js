const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

let songs = [
  {
    id: crypto.randomUUID(),
    title: "Shape of You",
    artist: "Ed Sheeran",
  },
  {
    id: crypto.randomUUID(),
    title: "Blinding Lights",
    artist: "The Weeknd",
  }
];


app.get('/songs', (req, res) => {
  res.status(200).json(songs);
});


app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});


