// Dati presenti nell'array principale
const auto = {
  id: "00012345",
  marca: "Fiat",
  modello: "Punto",
  colore: "grigio",
  alimentazione: "benzina"
};

// Dati che arrivano dal client (PUT / update) per modificare colore e modello
const datiClient = {
  id: "HACK-123",       // tentativo di modificare l'id
  colore: "nero",
  modello: "Punto Evo"
};


const updateAuto = { ...auto, ...datiClient };

console.log(updateAuto);