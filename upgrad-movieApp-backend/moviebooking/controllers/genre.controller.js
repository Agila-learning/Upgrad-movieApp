// app/controllers/genre.controller.js
const Genre = require('../models/genre.model'); // Assuming you have a Genre model

exports.findAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
