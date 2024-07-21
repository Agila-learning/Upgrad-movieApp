// app/controllers/artist.controller.js
const Artist = require('../models/artist.model'); // Assuming you have an Artist model

exports.findAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
