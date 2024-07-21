// app/controllers/movie.controller.js
const Movie = require('../models/movie.model'); // Assuming you have a Movie model

exports.findAllMovies = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const movies = await Movie.find(filter);
    res.json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findShows = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId).populate('shows'); // Assuming shows is a field in the movie model
    if (movie) {
      res.json(movie.shows);
    } else {
      res.status(404).send({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
