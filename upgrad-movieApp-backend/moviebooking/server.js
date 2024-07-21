// server.js

// Load required modules
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8085;

// Load routes
const movieRoutes = require('./routes/movie.routes');
const artistRoutes = require('./routes/artist.routes');
const genreRoutes = require('./routes/genre.routes');
const userRoutes = require('./routes/user.routes');

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

// Use routes
app.use('/api/movies', movieRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
